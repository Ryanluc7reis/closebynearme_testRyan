FROM node:20-alpine AS base

# Setup env variabless for yarn and nextjs
# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production

# update dependencies, add libc6-compat and dumb-init to the base image
RUN apk update && apk upgrade && apk add --no-cache libc6-compat && apk add dumb-init

# add the user and group we'll need in our final image
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install dependencies only when needed
FROM base AS development
WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --production=false --immutable

COPY --chown=node:node . .

USER node

# Add `ARG` instructions below if you need `NEXT_PUBLIC_` variables
# then put the value on your fly.toml
# Example:
# ARG NEXT_PUBLIC_SOMETHING

FROM base AS builder
WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

COPY --chown=node:node --from=development /app/node_modules ./node_modules

COPY --chown=node:node . .

# Build the app (in standalone mode based on next.config.js)
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# copy the public folder from the project as this is not included in the build process
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# copy the standalone folder inside the .next folder generated from the build process
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# copy the static folder inside the .next folder generated from the build process
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs


ENV NEXT_SHARP_PATH /app/node_modules/sharp

CMD ["dumb-init","node","server.js"]
