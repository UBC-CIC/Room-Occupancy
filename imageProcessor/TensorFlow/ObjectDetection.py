import tensorflow as tf
import numpy as np
import cv2

# Load the TensorFlow Lite model.
interpreter = tf.lite.Interpreter('model.tflite')
interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Define the model
height = input_details[0]["shape"][1]
width = input_details[0]["shape"][2]

floating_model = (input_details[0]['dtype'] == np.float32)

input_mean = 127.5
input_std = 127.5


# Load the input image
image = cv2.imread('ImageTesting/peopleCountingOffice.jpg')

# Convert BGR to RGB if needed
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
imH, imW, _ = image.shape 

# Resize the image to expected input size
image_resized = cv2.resize(image, (width, height)) # assuming the model expects 300x300 input
image_resized = np.uint8(image_resized)

# Add a batch dimension
input_data = np.expand_dims(image_resized, axis=0)

if floating_model:
    input_data = (np.float32(input_data) - input_mean) / input_std

# Set the tensor to the input.
interpreter.set_tensor(input_details[0]['index'], input_data)

# Run inference.
interpreter.invoke()

# Get the output details and retrieve the results.
boxes = interpreter.get_tensor(output_details[0]['index'])[0]
classes = interpreter.get_tensor(output_details[1]['index'])[0]
scores = interpreter.get_tensor(output_details[2]['index'])[0]
num_detections = int(interpreter.get_tensor(output_details[3]['index'])[0])  # Number of objects detected.

detections =[]

# Assume the label_map.txt file is in the same format as the COCO dataset (starting with '1').
with open('labelmap.txt', 'r') as file:
    labels = [line.strip() for line in file.readlines()]

# del "???" in labels
for index, content in enumerate(labels):
    if content == "???":
        del labels[index]

# Score threshold
score_threshold = 0
# Non-maximum suppression threshold
nms_threshold = 0.46

indices = cv2.dnn.NMSBoxes(boxes, scores, score_threshold, nms_threshold)
    
for i in indices:
    box = boxes[i]
    ymin = int(max(1,(box[0] * imH)))
    xmin = int(max(1,(box[1] * imW)))
    ymax = int(min(imH,(box[2] * imH)))
    xmax = int(min(imW,(box[3] * imW)))

    # Draw label
    object_name = labels[int(classes[i])] # Look up object name from "labels" array using class index

    if object_name != "person":
        continue
    else:
        cv2.rectangle(image, (xmin,ymin), (xmax,ymax), (10, 255, 0), 2)
        label = '%s: %d%%' % (object_name, int(scores[i]*100)) # Example: 'person: 72%'
        labelSize, baseLine = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.7, 2) # Get font size
        label_ymin = max(ymin, labelSize[1] + 10) # Make sure not to draw label too close to top of window
        cv2.rectangle(image, (xmin, label_ymin-labelSize[1]-10), (xmin+labelSize[0], label_ymin+baseLine-10), (255, 255, 255), cv2.FILLED) # Draw white box to put label text in
        cv2.putText(image, label, (xmin, label_ymin-7), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 0), 2) # Draw label text

        detections.append([object_name, scores[i], xmin, ymin, xmax, ymax])   
    
print(detections)
print(len(detections))

while True:
    cv2.imshow('Object detector', image)
    if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to quit
        break
cv2.destroyAllWindows()


