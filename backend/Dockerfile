FROM node:18.7.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD app.js ./
CMD [ "node", "app.js"]