FROM node:9.10.0-alpine
RUN npm install
ARG version
RUN echo ${version}
LABEL version=${version}
CMD ["npm", "start"]
