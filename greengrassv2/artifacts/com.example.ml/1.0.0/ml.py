from picamera2 import Picamera2, Preview
import torch
from torchvision import transforms
from torchvision.models.detection import fasterrcnn_resnet50_fpn, FasterRCNN_ResNet50_FPN_Weights
from PIL import Image
import time
import awsiot.greengrasscoreipc.clientv2 as clientV2
import json
import os
import requests
from datetime import datetime


# Constants
INTERVAL = 30

def capture(picam2):
    picam2.start()
    # time.sleep(1)
    image = picam2.capture_image("main")
    image.save("/home/cg22/imagecapture/captured.jpg")


    # Crop the image
    with open("/home/cg22/imagecapture/crop.json") as f:
        data = json.load(f)

    left = data["crop_x1"]
    right = data["crop_x2"]
    top = data["crop_y1"]
    bottom = data["crop_y2"]

    white_image = Image.new("RGB", image.size, "white")

    cropped_image = image.crop((left, top, right, bottom))

    white_image.paste(cropped_image, (left, top))
    white_image.save("/home/cg22/imagecapture/white_image.jpg")

    return white_image

def count_people(model, image):
    start_time = time.time()
    # Perform inference
    with torch.no_grad():
        prediction = model([image])

    # Set a confidence threshold: detections with a score below this are discarded
    confidence_threshold = 0.4

    # Filter detections by confidence score and count the number of people
    count = sum(1 for score, label in zip(prediction[0]['scores'], prediction[0]['labels']) if label == 1 and score > confidence_threshold)    
    
    duration = time.time()-start_time
    return count, duration

def transform_image(image):
    image = image.convert('RGB')
    # Transform to convert the image to tensor
    transform = transforms.Compose([
        # transforms.Resize([3686,2073]),
        transforms.ToTensor()
    ])
    return transform(image)

def update_camera_db(thing_name):
    # The API endpoint URL
    url = 'https://accl5w3lcl.execute-api.us-east-1.amazonaws.com/staging/camList'

    # Check if the thing are in the database
    response = requests.get(url)

    if response.status_code == 200:
    # The request was successful; you can now process the response
        data = response.json()
        # Check if the thing exists in the cam_name inside the response
        thing_exists = any(camera['cam_name'] == thing_name for camera in data)

        if thing_exists: # Pass
            pass

        else: #Create a new camera in teh database
            current_time = str(datetime.utcnow().isoformat())
            data = {
            "cam_name": thing_name,
            "alert_thre": 10,
            "crop_x1": 0,
            "crop_x2": 4608,
            "crop_y1": 0,
            "crop_y2": 2592,
            "Location": "UBC",
            "owner": "UBC_CIC",
            "time_add": current_time
        }

            # Convert the Python dictionary to a JSON string
            payload = json.dumps(data)

            # Send the PUT request
            response = requests.put(url, data=payload, headers={'Content-Type': 'application/json'})

            # Check the response
            if response.status_code in [200, 201]:  # Success status codes
                print("Success:", response.json())
            else:
                print("Error:", response.status_code, response.text)

def doit(picam2, model):
    #Capture image
    print("Start Capturing Image")
    capture_time = time.time()
    img = capture(picam2)
    capture_time = time.time()-capture_time
    print(f"Captured Image: {capture_time}")

    img = transform_image(img)

    print("Start Counting")
    count_time = time.time()
    people, _ = count_people(model, img)
    count_time = time.time()-count_time
    print(f"Finish Counting: {count_time}")
    print(f"People Count: {people}")

    return people

def main():
    # Initiate the MQTT server
    ipc_client = clientV2.GreengrassCoreIPCClientV2()
    topic = 'tswrite'
    qos = '1'

    # Initiate Picamera
    picam2 = Picamera2()
    camera_config = picam2.create_still_configuration()

    # Initiate the machine learning model
    model = fasterrcnn_resnet50_fpn(weights = FasterRCNN_ResNet50_FPN_Weights.DEFAULT)
    model.eval()  # Set the model to inference mode

    thing_name = os.environ.get('AWS_IOT_THING_NAME')

    #Update the camera_db
    update_camera_db(thing_name)

    while True:
        start_time = time.time()

        # do the ML
        people = doit(picam2, model)
        payload = {
            'count':people, 
            'thing_name': thing_name}
        
        print("Start Publishing")
        mqtt_time = time.time()
        resp = ipc_client.publish_to_iot_core(topic_name=topic, qos=qos, payload=json.dumps(payload).encode())
        # ipc_client.close()
        mqtt_time = time.time() - mqtt_time
        print(f"Finish Publishing: {mqtt_time}")

        
        processing_time = time.time() - start_time
        sleep_time = max(0, INTERVAL - processing_time)

        time.sleep(sleep_time)

main()
