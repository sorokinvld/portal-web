FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn add @babel/runtime refractor

RUN yarn install

COPY . .

EXPOSE 3000

CMD npm run dev
