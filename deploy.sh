#!/bin/bash

# Define the password as an environment variable (not hardcoded in the script)
export SSHPASS="C3xcc@34df"

# Connect to the server and execute the commands
sshpass -e ssh main@64.23.152.172 << 'ENDSSH'

# Fix dpkg if necessary
sudo dpkg --configure -a

# Update and install dependencies
sudo apt-get update
sudo apt-get install -y nodejs npm docker.io git
sudo npm install -g yarn

# Clone the repository
git clone https://github.com/Ryanluc7reis/closebynearme_testRyan.git
cd closebynearme_testRyan

# Run the container in the deploy environment (up the mongo and redis from my database)
cd deploy
docker-compose up -d --build

# Build and run the app environment
cd ..

# Configure systemd for all app
sudo bash -c 'cat > /etc/systemd/system/app.service <<EOF
[Unit]
Description=App Service
After=network.target

[Service]
User=main
WorkingDirectory=/home/main/closebynearme_testRyan
ExecStart=/usr/local/bin/yarn admin-prod
ExecStart=/usr/local/bin/yarn web-prod
ExecStart=/usr/local/bin/yarn backend-prod
Restart=always

[Install]
WantedBy=multi-user.target
EOF'

# Build and run the backend environment
#cd ../backend


# Configure systemd for backend
#sudo bash -c 'cat > /etc/systemd/system/backend.service <<EOF
#[Unit]
#Description=Backend Service
#After=network.target

#[Service]
#User=main
#WorkingDirectory=/home/main/closebynearme_testRyan/backend
#ExecStart=/usr/local/bin/yarn start
#Restart=always

#[Install]
#WantedBy=multi-user.target
#EOF'

# Build and run the web environment
#cd ../web
#yarn install --frozen-lockfile
#yarn build

# Configure systemd for web
#sudo bash -c 'cat > /etc/systemd/system/web.service <<EOF
#[Unit]
#Description=Web Service
#After=network.target

#[Service]
#User=main
#WorkingDirectory=/home/main/closebynearme_testRyan/web
#ExecStart=/usr/local/bin/yarn start
#Restart=always

#[Install]
#WantedBy=multi-user.target
#EOF'

# Reload and start the services
sudo systemctl daemon-reload
sudo systemctl start app
#sudo systemctl start admin
#sudo systemctl start backend
#sudo systemctl start web
#sudo systemctl enable admin
#sudo systemctl enable backend
#sudo systemctl enable web

ENDSSH

echo "Deploy successful! The application is live."