# Install dependencies only when needed
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat npm

COPY . .

RUN npm install

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "dev"]
