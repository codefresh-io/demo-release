FROM node:9.10.0-alpine
RUN npm install
CMD ["npm", "start"]
