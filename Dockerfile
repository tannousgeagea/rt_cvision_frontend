FROM node:18-alpine

LABEL maintainer="tannousgeagea@hotmail.com"
LABEL com.visionnest.version="1.1b1"

RUN mkdir -p /app
COPY ./rt_cvision_frontend /app
WORKDIR /app

RUN npm install

CMD ["npm", "start"]
