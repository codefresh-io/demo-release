FROM node:8.8-alpine
WORKDIR /src
COPY ./package.json /src
RUN npm install
COPY . /src
CMD ["npm", "start"]
