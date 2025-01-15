#!/bin/bash

# npm run proto:all
docker compose -f $PWD/docker-compose-qa.yaml up -d --build -V
