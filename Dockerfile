FROM node:15.5.0-alpine3.11

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

# Using node user instead of root
USER node

COPY --chown=node:node app.js date.js ./
COPY --chown=node:node package.json ./

RUN mkdir -p /app/public/css

WORKDIR /app/public/css

COPY --chown=node:node public/css/styles.css ./

RUN mkdir -p /app/views

WORKDIR /app/views

COPY --chown=node:node views/*.ejs ./

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["node" , "app.js"]