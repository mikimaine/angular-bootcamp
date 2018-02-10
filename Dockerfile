# Dockerfile for Web backend Admin

FROM node:8.4.0

MAINTAINER Mikiyas Amdu <mikias.amdu@gmail.com>

ADD . /home/web-admins

WORKDIR /home/web-admins

RUN npm install


RUN npm run postinstall

EXPOSE 4200

ENTRYPOINT ["node", "server.js"]
