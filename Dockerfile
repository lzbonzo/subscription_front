FROM node:15 as builder

WORKDIR /front

COPY . .

ENV HOST 0.0.0.0
RUN yarn install && yarn build
