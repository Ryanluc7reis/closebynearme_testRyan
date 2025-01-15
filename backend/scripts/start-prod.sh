#!/bin/bash

docker compose -f $PWD/docker-compose-prod.yaml up -d --build -V
