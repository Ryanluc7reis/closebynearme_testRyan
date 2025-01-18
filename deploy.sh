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

# Configura o systemd para o app
cd ..
sudo bash -c 'cat > /etc/systemd/system/app.service <<EOF
[Unit]
Description=App Service
After=network.target

[Service]
User=main
WorkingDirectory=/home/main/closebynearme_testRyan
ExecStart=/bin/bash -c "/usr/local/bin/yarn admin-prod && /usr/local/bin/yarn web-prod && /usr/local/bin/yarn backend-prod"
Restart=always

[Install]
WantedBy=multi-user.target
EOF'

# Recarrega e inicia o serviço
sudo systemctl daemon-reload
sudo systemctl start app

ENDSSH

echo "Deploy successful! The application is live."