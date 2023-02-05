FROM node:16-alpine
WORKDIR /telegram-webapp-react
COPY /telegram-webapp-react .

#COPY package.json .

RUN npm install
#ENV NODE_ENV production
EXPOSE 3000
#RUN npm run start
CMD [ "npm", "run", "start" ]