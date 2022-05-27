FROM node:16.14.2
WORKDIR /opt/app
COPY package.json .
RUN npm install --quiet
RUN npm install -g nodemon --quiet
COPY . .
CMD nodemon -L --watch . index.js