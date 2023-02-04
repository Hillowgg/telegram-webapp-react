FROM node:16-alpine
WORKDIR .
COPY . .

#COPY package.json .

RUN npm install
#ENV NODE_ENV production
EXPOSE 3000
#RUN npm run start
CMD [ "npm", "run", "start" ]