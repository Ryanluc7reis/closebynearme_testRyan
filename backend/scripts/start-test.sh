#!/bin/bash
ENV_VARS="$(cat .env.development | awk '!/^\s*#/' | awk '!/^\s*$/')"

eval "$(
    printf '%s\n' "$ENV_VARS" | while IFS='' read -r line; do
        key=$(printf '%s\n' "$line" | sed 's/"/\\"/g' | cut -d '=' -f 1)
        value=$(printf '%s\n' "$line" | cut -d '=' -f 2- | sed 's/"/\\\"/g')
        printf '%s\n' "export $key=\"$value\""
    done
)"

if test -f ".env.local"; then
    ENV_VARS="$(cat .env.local | awk '!/^\s*#/' | awk '!/^\s*$/')"

    eval "$(
        printf '%s\n' "$ENV_VARS" | while IFS='' read -r line; do
            key=$(printf '%s\n' "$line" | sed 's/"/\\"/g' | cut -d '=' -f 1)
            value=$(printf '%s\n' "$line" | cut -d '=' -f 2- | sed 's/"/\\\"/g')
            printf '%s\n' "export $key=\"$value\""
        done
    )"
    echo "Loaded local env"
fi

REDIS_URI=127.0.0.1
REDIS_PORT=6379
NODE_ENV=test

# docker compose -f $PWD/docker-compose.yaml up --build -V -d
# npm run test:generate-queries &&
jest --config ./test/jest.e2e.json $1 $2
# docker compose -f $PWD/docker-compose.yaml down
