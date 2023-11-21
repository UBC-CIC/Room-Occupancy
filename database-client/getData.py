# Lambda function to query data from Timestream database
import json
import boto3

def lambda_handler(event, context):
    client = boto3.client('timestream-query')
    response = client.query(
        QueryString="""
        SELECT * FROM "sampleDB"."db_cam"
        """,
    )
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
