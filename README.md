# Using IoT Devices for Occupancy Management

This repository contains the code and documentation for the project, "Using IoT Devices for Occupancy Management." The project aims to develop a system that leverages IoT devices to monitor and manage the occupancy of spaces, such as office buildings, meeting rooms, and other areas.

## Table of Contents

- [Introduction](#introduction)
- [High Level Architecture](#high-level-architecture)
- [Solution Deployment](#solution-deployment)
- [Credits](#Credits)
- [License](#License)


## Introduction

In an increasingly connected world, optimizing occupancy management is essential for improving energy efficiency and ensuring the safety and comfort of occupants. Our project utilizes IoT devices, including sensors and a central management system, to achieve these goals. This repository contains the source code and associated documentation for the project.

## Features

- Real-time occupancy monitoring
- Automated alerts and notifications
- Data analytics for occupancy trends
- Web-based management interface

## High Level Architecture
![image](https://github.com/UBC-CIC/Room-Occupancy/assets/69894554/95911cc0-ad4c-4a14-a756-4a5a18e0df18)
Our solution consist of the four main components:
1. IoT device - RaspberryPi Module 4B and RaspberryPi Camera Module 3 Wide Lense takes images of the area and counts the number of people with a locally deployed machine learning model.
2. Machine Learning Model - PyTorch FastRCNN model that is deployed on the IoT device processes image locally and deletes it right away for security purposes.
3. Cloud - Several AWS services were used such as Amplify, Cognito, AppSync, TimeStream DB etc. For more details, check our handover guide.
4. Web Application - Web application built using ReactJS and Semantic UI. For more details, check client directory.

## Solution Deployment
Step-by-step instructions on how to deploy cloud components and hardware components. This instruction is written with the assumption that you already have RaspberryPi Module 4B and RaspberryPi Camera Module 3 Wide Lens connected and Linux OS is installed on Raspberry Pi.
### Cloud Deployment
- Download yml file in the deployment directory: CG22_cloud_deployment.yaml 
- Use this command in aws cli to create a new CDK app that contains the cloud resources:  cdk migrate --stack-name CG-22 --from-path ./CG-22.yaml --language typescript 
### Raspberry Pi Deployment
- Make ssh connection with Raspberry Pi.
- Run “setup.py” python file in the deployment directory locally to install necessary packages and GreenGrass component 
- Run the following command on the Raspberry Pi terminal to start the machine learning component. 
**Start Machine Learning Component**
```
sudo /greengrass/v2/bin/greengrass-cli deployment create \ 
--recipeDir ~/greengrassv2/recipes \ 
--artifactDir ~/greengrassv2/artifacts \ 
--merge "com.example.ml=1.0.0" 
```
**Start MQTT Component**
```
sudo /greengrass/v2/bin/greengrass-cli deployment create \ 
--recipeDir ~/greengrassv2/recipes \ 
--artifactDir ~/greengrassv2/artifacts \ 
--merge "com.example.ml=1.0.0" 
```

# Credits

This application was architected and developed by Der-Chien Chang, Steve He, Cassiel Jung, Colin Pereira, and Danny Song, with project assistance by Scott McMillan and Liana Leung. A special thanks to the UBC Cloud Innovation Centre Technical and Project Management teams for their guidance and support.
# License

This project is distributed under the [MIT License](LICENSE). You can view licensing on the web app in the client directory.
