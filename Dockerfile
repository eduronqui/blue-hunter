FROM node:8-alpine

WORKDIR /usr/app/blue-hunter

COPY package.json .

RUN npm install

COPY ./app .

EXPOSE 3000

CMD ["npm", "run", "serve"]