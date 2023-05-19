FROM node:16.18 AS builder

WORKDIR /app

RUN npm i -g gatsby-cli@4.9.0

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN gatsby build
