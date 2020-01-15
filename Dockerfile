FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

VOLUME .next

COPY . ./
RUN yarn run build

CMD [ "yarn", "run", "start" ]