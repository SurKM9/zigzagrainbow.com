FROM node:16.18 AS builder

WORKDIR /app

RUN npm i -g gatsby-cli@4.9.0

COPY package*.json ./

RUN npm install

COPY . .

RUN gatsby -v
RUN gatsby build
