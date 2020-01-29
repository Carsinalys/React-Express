FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

ENV NODE_ENV=production PORT=3000 SALT=Pidor_ultra_pidor_tempo_govno_ebanoe_gde_moi_avtomat \
EXPIRE=60 SRAYIN=10080 DATABASE=mongodb+srv://User:<password>@cluster0-vfbi9.mongodb.net/Orders?retryWrites=true&w=majority \
DATABASE_LOCAL=mongodb://localhost:27017/dbname DATABASE_PASSWORD=Cardinalys EMAIL_USERNAME=andrei.baranau@onthespotdev.com \
EMAIL_PASSWORD=Cardinalys SENDGRID_NAME=apikey SENDGRID_PASSWORD=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 \
REDIS_PORT=7001 REDIS_HOST='172.17.0.1'

COPY package*.json ./

COPY --chown=node:node . .

RUN npm install --only=production && npm cache clean --force

USER node

EXPOSE 3000

CMD [ "node", "node_modules/@babel/node/lib/babel-node.js", "server.js" ]
