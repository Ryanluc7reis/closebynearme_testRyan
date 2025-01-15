#!/bin/bash
git pull origin main

docker compose up --build -d && docker rmi $(docker images -qf 'dangling=true')
echo "Done..."
