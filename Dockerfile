# Install dependencies only when needed
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat

RUN yarn install

WORKDIR /app

RUN yarn add react next react-dom shelljs

COPY . .

RUN yarn install

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn run build

EXPOSE 3000
ENV PORT 3000

CMD ["yarn","run", "start"]
