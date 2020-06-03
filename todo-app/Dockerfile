FROM node:13-alpine3.10

WORKDIR /app/

COPY . ./app

RUN cd app/src/ && yarn

EXPOSE 8080

CMD ["node", "app/src/index.js"]
