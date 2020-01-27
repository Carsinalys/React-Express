FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

COPY --chown=node:node . .

USER node

RUN npm install && npm cache clean --force
RUN rm -rf node_modules/sharp
RUN npm install --arch=x64 --platform=linux --target=8.10.0 sharp
RUN npm rebuild

EXPOSE 3000

CMD [ "node", "node_modules/@babel/node/lib/babel-node.js", "server.js" ]
