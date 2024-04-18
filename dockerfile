FROM node:20.10.0-alpine3.19

# copy entrypoint to container to /home
COPY ./entrypoint.sh /home/entrypoint.sh
COPY ./build.sh /home/node/app/build.sh
# make entrypoint executable
RUN chmod +x /home/entrypoint.sh
RUN chmod +x /home/node/app/build.sh
WORKDIR /home/node/app

COPY package*.json ./

#install python
RUN apk add --no-cache python3 py3-pip
RUN apk add --no-cache --virtual .build-deps alpine-sdk python3-dev libffi-dev openssl-dev
RUN python3 -m venv /home/node/app/venv
RUN /home/node/app/venv/bin/pip install fastapi uvicorn pynacl
RUN npm install -g npm@10.5.0
RUN npm install --legacy-peer-deps
#exec .sh
RUN /home/node/app/build.sh
#pip install schedule not working
# RUN pip3 install schedule not working


EXPOSE 3000
