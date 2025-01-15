# Server Must have
- 4gb minimum (Recommend 8gb)
- 4 core cpu
- Atleast 60gb of space available (for long working server)
- Docker installed
- Mongosh installed
- Nginx installed
- Cerbot installed
- Git credentials saved on ssh

# Architecture
#### Backend
- NestJS with Fastify
- MongoDB
- Redis
- Graphql Apollo Code First
- Rest Api
- AWS S3 for schema update in server side
- Docker

#### Admin
- NextJS 14.2
- Graphql Apollo
- Codegen
- Vuexy Template 9.3 Router version
- Material UI
- React Hook Form
- AWS S3 for image upload in client side
- Docker

#### Web
- NextJS 14.2
- Tailwind
- Graphql Apollo
- Codegen
- Docker

# Deployment
Use the **./start.sh** bash script to update repo and then make the docker compose build.

## Settings Production
Under **deploy** folder you can find a **docker-compose.yml** in this folder you can do 
```
docker compose up --d
```
This is only for the first initial settings, or in case the mongo docker is down, you can run the same command and everything it's up again.
After first initial, you need to create the **user:pwd** in mongodb, you can use mongosh for this. then added it on **.env.production** file in **backend** folder.

PS: Docker will create a **data** folder in the same folder as the docker-compose file, this folder is the DB, **don't delete it.**


# Nginx Settings
### Admin
- Port: 4010
- URL: admin.closebynearme.com
- PROTOCOL: http/2
- Certificate: Let's encrypt

### Web
- Port: 3000
- URL: closebynearme.com
- PROTOCOL: http/2
- Certificate: Let's encrypt

### API
- Port: 4050
- URL: api.closebynearme.com
- PROTOCOL: http/2
- Certificate: Let's encrypt
