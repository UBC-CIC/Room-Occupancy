import numpy as np
from PIL import Image

# # Load the .npy file
# images = np.load('images.npy')

# # Iterate over the images and save each one
# for i, img_array in enumerate(images[:2]):
#     # Convert the NumPy array to a PIL image
#     img = Image.fromarray(img_array)

#     # Save the image
#     img.save(f'image_{i}.png')

import cv2
import os

save_directory = "Dataset_Two"

# Load the .npy file
images = np.load('Dataset/data/images.npy')

# Iterate over the images and save each one
for i, img_array in enumerate(images[:1000]):
    # The image array might need to be converted depending on the color format
    # OpenCV expects color images to be in BGR format
    # If your images are in RGB format, convert them to BGR
    img_bgr = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)


    file_path = os.path.join(save_directory, f'image_{i}.jpg')

    # Save the image using OpenCV
    cv2.imwrite(file_path, img_bgr)