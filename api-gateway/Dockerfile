FROM node:alpine
RUN mkdir -p /src
COPY package*.json ./
WORKDIR /src
RUN yarn
COPY . /src
EXPOSE 3000
CMD yarn start