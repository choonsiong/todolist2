FROM node:alpine

RUN mkdir -p /usr/src/todolist

WORKDIR /usr/src/todolist

COPY app.js app.js
COPY date.js date.js
COPY package.json package.json

RUN mkdir -p /usr/src/todolist/public/css

WORKDIR /usr/src/todolist/public/css

COPY public/css/styles.css styles.css

RUN mkdir -p /usr/src/todolist/views

WORKDIR /usr/src/todolist/views

COPY views/about.ejs about.ejs
COPY views/footer.ejs footer.ejs
COPY views/header.ejs header.ejs
COPY views/list.ejs list.ejs

WORKDIR /usr/src/todolist

RUN npm install

EXPOSE 3000

CMD ["node" , "app.js"]
