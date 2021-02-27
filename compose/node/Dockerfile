FROM mhart/alpine-node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "docker:serve"]

EXPOSE 8080
