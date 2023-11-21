# lambda function to write data to timestream database
import json
import boto3
from botocore.config import Config
import time

def lambda_handler(event, context):
    region = "us-east-1"
    session = boto3.Session()

    write_client = session.client('timestream-write', config=Config(region_name=region, read_timeout=20, max_pool_connections = 5000, retries={'max_attempts': 10}))

    
    current_time = str(int(round(time.time() * 1000)))
    dimensions = [
        {'Name': 'owner_id', 'Value': '233'},
        {'Name': 'aleart_thre', 'Value': '12'},
    ]
    cam = {
      'Dimensions': dimensions,
      'MeasureName': 'Location',
      'MeasureValue': 'UBC_Orchard',
      'MeasureValueType': 'VARCHAR',
      'Time': current_time
    }

    records = [cam]

    try:
      result = write_client.write_records(DatabaseName='sampleDB', TableName='db_cam',
                         Records=records, CommonAttributes={})
      print("WriteRecords Status: [%s]" % result['ResponseMetadata']['HTTPStatusCode'])
    except write_client.exceptions.RejectedRecordsException as err:
      print("RejectedRecords: ", err)
      for rr in err.response["RejectedRecords"]:
          print("Rejected Index " + str(rr["RecordIndex"]) + ": " + rr["Reason"])
          if "ExistingVersion" in rr:
              print("Rejected record existing version: ", rr["ExistingVersion"])
    except Exception as err:
      print("Error:", err)
      
    
    return {
        'statusCode': 200,
        'body': json.dumps('Injest successfully')
    }
