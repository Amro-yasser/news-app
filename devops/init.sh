#! /bin/bash

SECONDS=0 # builtin
set -e  # exit if a command fail

echo -e "\n\n\e[93mInstall Docker\e[0m"
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo docker --version

echo -e "\n\n\e[93mInstall Compose\e[0m"
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker-compose --version

echo -e "\n\n\e[93mInstall Nginx\e[0m"
sudo apt-get update
sudo apt-get install nginx
sudo nginx -v

echo -e "\n\n\e[93mInstall Certbot\e[0m"
sudo apt-get install certbot

echo -e "\n\n\e[93mInstall appach utils for htpasswd \e[0m"
sudo apt-get install apache2-utils

echo -e "\n\n\e[93mConfig Timezone\e[0m"
sudo timedatectl set-timezone Asia/Dubai

echo -e "\n\n\e[93mAll done in $((SECONDS / 60)) minute(s) and $((SECONDS % 60)) second(s) \e[0m"
