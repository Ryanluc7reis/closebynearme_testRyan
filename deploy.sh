#!/bin/bash

# Define a senha como uma variável de ambiente
export SSHPASS="C3xcc@34df"

# Conecta ao servidor e executa os comandos
sshpass -e ssh main@64.23.152.172 << 'ENDSSH'

# Corrige o dpkg, se necessário
sudo dpkg --configure -a

# Atualiza e instala dependências
sudo apt-get update
sudo apt-get install -y nodejs npm docker.io git docker-compose
sudo npm install -g yarn

# Remove o diretório existente (se houver) e clona o repositório
git clone https://github.com/Ryanluc7reis/closebynearme_testRyan.git
cd closebynearme_testRyan

# Sobe os containers do MongoDB e Redis
cd deploy
docker-compose up -d --build


# Navega para a pasta backend, sobe os containers e cria o serviço
cd ../backend
docker-compose up -d --build

# Cria o serviço para monitorar o ambiente backend
sudo bash -c 'cat > /etc/systemd/system/backend.service <<EOF
[Unit]
Description=Backend Service
After=network.target

[Service]
User=main
WorkingDirectory=/home/main/closebynearme_testRyan/backend
ExecStart=/usr/local/bin/docker-compose up
Restart=always

[Install]
WantedBy=multi-user.target
EOF'

# Navega para a pasta web, sobe os containers e cria o serviço
cd ../web
docker-compose up -d --build

# Cria o serviço para monitorar o ambiente web
sudo bash -c 'cat > /etc/systemd/system/web.service <<EOF
[Unit]
Description=Web Service
After=network.target

[Service]
User=main
WorkingDirectory=/home/main/closebynearme_testRyan/web
ExecStart=/usr/local/bin/docker-compose up
Restart=always

[Install]
WantedBy=multi-user.target
EOF'


# Navega para a pasta admin, sobe os containers e cria o serviço
cd ../admin
docker-compose up -d --build

# Cria o serviço para monitorar o ambiente admin
sudo bash -c 'cat > /etc/systemd/system/admin.service <<EOF
[Unit]
Description=Admin Service
After=network.target

[Service]
User=main
WorkingDirectory=/home/main/closebynearme_testRyan/admin
ExecStart=/usr/local/bin/docker-compose up
Restart=always

[Install]
WantedBy=multi-user.target
EOF'

# Recarrega e inicia os serviços
sudo systemctl daemon-reload
sudo systemctl start admin
sudo systemctl start web
sudo systemctl start backend

# Habilita os serviços para iniciar automaticamente na inicialização do sistema
sudo systemctl enable admin
sudo systemctl enable web
sudo systemctl enable backend

ENDSSH

echo "Deploy successful! The application is live."