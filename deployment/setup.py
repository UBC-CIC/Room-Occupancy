import subprocess
import sys
import os

def install_java():
    try:
        print("Installing Java...")
        subprocess.run(["sudo", "apt-get", "update"], check=True)
        subprocess.run(["sudo", "apt-get", "install", "-y", "default-jre", "default-jdk"], check=True)
        print("Java has been successfully installed.")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while installing Java: {e}")
        sys.exit(1)

def install_aws_cli():
    try:
        print("Installing aws cli...")
        #uninstall previous yum version of awscli
        command = "sudo yum remove awscli"
        subprocess.run(command, shell=True)

        command = 'curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip"'
        subprocess.run(command, shell=True)

        command = "unzip awscliv2.zip"
        subprocess.run(command, shell=True)

        command = "sudo ./aws/install"
        subprocess.run(command, shell=True)

        command = "./aws/install -i /usr/local/aws-cli -b /usr/local/bin"
        subprocess.run(command, shell=True)

        print("Confirm the installation with the following command")
        command = "aws --version"
        subprocess.run(command, shell=True)

    except subprocess.CalledProcessError as e:
        print(f"An error occurred while installing aws cli: {e}")
        sys.exit(1)

def configure_aws_cli():
    try:
        # Standard AWS configuration
        print("\nStarting standard AWS CLI configuration...")
        print("You will need your AWS Access Key ID, Secret Access Key, default region name, and the output format.")
        input("Press Enter to start AWS CLI configuration...\n")
        subprocess.run(["aws", "configure"], check=True)

        # AWS SSO configuration
        print("\nStarting AWS CLI Single Sign-On (SSO) configuration...")
        print("You will need your SSO start URL, SSO region, and the SSO account you want to log into.")
        input("Press Enter to start AWS CLI SSO configuration...\n")
        subprocess.run(["aws", "configure", "sso"], check=True)

        print("AWS CLI and AWS SSO configuration completed successfully.")

    except subprocess.CalledProcessError as e:
        print(f"An error occurred during AWS CLI configuration: {e}")
        sys.exit(1)

def configure_greengrass():

    # Prompt the user for AWS Greengrass thing name and group name
    thing_name = input("Enter the AWS Greengrass device name: ")
    thing_group_name = input("Enter the AWS Greengrass thing group name: ")

    try:
        # # Download and unzip the AWS IoT Greengrass Core software
        print("Downloading and unzipping the AWS IoT Greengrass Core software...")
        subprocess.run(
            "curl -s https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip > greengrass-nucleus-latest.zip && "
            "unzip greengrass-nucleus-latest.zip -d GreengrassInstaller && "
            "rm greengrass-nucleus-latest.zip",
            shell=True, check=True
        )

        # Run the Greengrass installer with the user's input
        print("Running the AWS IoT Greengrass Core software installer...")
        subprocess.run(
            "sudo -E java -Droot=\"/greengrass/v2\" -Dlog.store=FILE -jar ./GreengrassInstaller/lib/Greengrass.jar "
            "--aws-region us-east-1 --thing-name {} --thing-group-name {} "
            "--component-default-user ggc_user:ggc_group --provision true "
            "--setup-system-service true --deploy-dev-tools true".format(thing_name, thing_group_name),
            shell=True, check=True, executable='/bin/bash'
        )
        print("AWS IoT Greengrass Core software has been configured successfully.")

    except subprocess.CalledProcessError as e:
        print(f"An error occurred while configuring AWS IoT Greengrass: {e}")
        sys.exit(1)

def pull_component_github():
    
    subprocess.run("mkdir github", shell=True)
    subprocess.run("pip install GitPython --break-system-packages", shell=True)
    
    from git import Repo

    repo_dir = "."

    git_url = "https://github.com/UBC-CIC/Room-Occupancy.git"
    Repo.clone_from(git_url, repo_dir)


def main():
    install_java()
    install_aws_cli()
    configure_aws_cli()
    configure_greengrass()
    pull_component_github()

main()
