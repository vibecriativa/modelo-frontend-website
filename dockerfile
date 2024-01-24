FROM node:20.10.0-alpine3.17

#/home/node/app

WORKDIR /home/node/app

COPY package*.json ./

#install python
RUN apk add --no-cache python3 py3-pip
RUN apk add --no-cache --virtual .build-deps alpine-sdk python3-dev libffi-dev openssl-dev
RUN npm install -g npm@10.2.5
RUN npm install
RUN npm run build
#pip install schedule
RUN pip3 install schedule


EXPOSE 3000