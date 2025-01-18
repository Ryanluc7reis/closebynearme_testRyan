###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine As development
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY --chown=node:node .yarnrc package.json yarn.lock ./

RUN yarn install --immutable 


# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
#RUN yarn build

# Set NODE_ENV environment variable
ENV NODE_ENV production

RUN yarn install --production[=true]

USER node

###################
# PRODUCTION
###################

FROM node:20-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/_protos ./_protos

# Start the server using the production build
CMD [ "node", "dist/src/main.js" ]
