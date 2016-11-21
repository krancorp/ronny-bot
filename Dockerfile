FROM node:argon

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN chmod +x ./start.sh

EXPOSE 80
EXPOSE 443
EXPOSE 8080
CMD ["/bin/sh", "npm start"]
