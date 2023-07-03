# Install dependencies only when needed
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN yarn install

FROM node:alpine AS runner
WORKDIR /app

COPY . .

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn run build

EXPOSE 3000
ENV PORT 3000

CMD ["yarn","run", "start"]
