import boto3
import numpy as np
import time
import matplotlib.pyplot as plt

session = boto3.Session(profile_name='561089261118_ECE_CapstonePowerUserAccess')

client = session.client("rekognition")

#Download images.npy from https://www.kaggle.com/datasets/fmena14/crowd-counting/data?select=images.npy to Dataset/data


def count_people(client, image): #Function of Counting People
    start_time = time.time()
    result = client.detect_labels(
        Image={'Bytes': image}
    )

    # Process the response to count people
    count = 0
    for label in result["Labels"]:
        if label["Name"] in ["Person", "People"]:
            count += len(label["Instances"])
    
    duration = time.time()-start_time
    return count, duration

def rmse(predicts, labels): #Function of Calculating The RMSE Metrics
    ms = 0
    
    if len(predicts) == len(labels):
        for predict, label in zip(predicts, labels):
            ms += (predict - label)**2
        return ms/len(predicts)
    else:
        raise Exception("The length is not the same")

def plot(predict, label): #Function of visualizing the result

    plt.figure(figsize=(8,8))
    plt.title("AWS Rekognition", fontsize=20)
    plt.scatter(label, predict, alpha=0.5)
    plt.xlabel("Actual Occupancy", fontsize=15)
    plt.ylabel("Detected Occupancy", fontsize=15)
    plt.plot([0,55], [0,55], color="black")
    plt.show()

f = open('result.txt', 'w')

label = np.load("Dataset/data/labels.npy") #The actual number of people in the image

countErr = [] #Store the error for each image
durations = [] #Storing all the process time for each image

counts = [] #Store all the count for graph

root_mean_square_error = 0

testing_sample = 4 #How many image from the dataset to be evaluated

testing_label = label[:testing_sample]

print("START")

for i, lab in zip(range(testing_sample), testing_label):
    with open(f'Dataset/image_{i}.jpg', 'rb') as img_file:
        img = img_file.read()
    
    count, duration = count_people(client, img)

    counts.append(count)
    
    error = ((abs(lab[0]-count))/lab[0])*100 #Percentage error

    countErr.append(error)
    durations.append(duration)

    if i in [50, 100, 150, 200, 250, 300, 350, 400, 450]:
        print(f"-----------{i}----------------")
    
    f.write('people detected: ' + str(count) + ' expected: ' + str(lab) + ' Difference: ' + str(abs(lab[0]-count)) + '\n')


#Metrics
error_rate = (sum(countErr)/len(countErr))
process_time = (sum(durations)/len(durations))

root_mean_square_error = rmse(counts, testing_label)

f.write('Average error rate: ' + str(error_rate) + '% ' + ' Average Process Time: ' + str(process_time) + ' Root Mean Square Error ' + str(root_mean_square_error))
f.close()

print("DONE")


plot(counts, testing_label)


