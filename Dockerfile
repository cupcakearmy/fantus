FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY next.config.js .
COPY .env .

CMD [ "yarn", "run", "start" ]