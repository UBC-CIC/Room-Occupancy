import json
import boto3
import time

def lambda_handler(event, context):
    # TODO implement
        count = 0
        
        client = boto3.client("rekognition")
        s3 = boto3.client("s3")
        
        
        # These are S3 bucket trigger event
        bucket_name = event['Records'][0]['s3']['bucket']['name']
        object_key = event['Records'][0]['s3']['object']['key']
        
        # Call Rekognition detect_labels API with the image from the S3 bucket
        response = client.detect_labels(
            Image={"S3Object": {"Bucket": bucket_name, "Name": object_key}}
         )

        # Process the response to count people
        count = 0
        for label in response["Labels"]:
            if label["Name"] in ["Person", "People"]:
                count += len(label["Instances"])
        
        print(f"People Counting: {count}")
        
        
        return {
        'statusCode': 200,
        'body': json.dumps('Hello from test!'),
        'output': count
    }
