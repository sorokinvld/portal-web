FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install
RUN yarn add @babel/runtime

COPY . .

EXPOSE 3000

CMD npm run dev