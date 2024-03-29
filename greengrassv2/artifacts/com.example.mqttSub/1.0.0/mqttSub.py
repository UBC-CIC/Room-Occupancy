import threading
import traceback

import awsiot.greengrasscoreipc.clientv2 as clientV2

topic = 'pi/crop/update/new_pi2'
qos = '1'

def on_stream_event(event):
    try:
        topic_name = event.message.topic_name
        message = str(event.message.payload, 'utf-8')
        # Write the message to the config file
        with open("/home/cg22/imagecapture/crop.json", "w") as f:
            f.write(message)

        print(f'Received new message on topic {topic_name}:  {message}')
    except:
        traceback.print_exc()

def on_stream_error(error):
    # Return True to close stream, False to keep stream open.
    return True

def on_stream_closed():
    pass

ipc_client = clientV2.GreengrassCoreIPCClientV2()
resp, operation = ipc_client.subscribe_to_iot_core(
    topic_name=topic,
    qos=qos, 
    on_stream_event=on_stream_event,
    on_stream_error=on_stream_error,
    on_stream_closed=on_stream_closed
)

#Keep the main thread alive, or the process will exit.
event = threading.Event()
event.wait()

#To stop subscribing, close the operation stream.
operation.close()
ipc_client.close()