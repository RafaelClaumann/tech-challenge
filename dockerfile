FROM node:alpine

WORKDIR /usr/tech-challenge

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run dev"]