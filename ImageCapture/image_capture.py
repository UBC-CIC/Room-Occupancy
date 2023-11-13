from picamera2 import Picamera2, Preview
import time

picam2 = Picamera2()

camera_config = picam2.create_still_configuration()

time.sleep(1)
picam2.start_and_capture_files("test{:d}.jpg", initial_delay=0, delay=0, num_files=1, show_preview=False, capture_mode="still")

