FROM node:0.10.38

# Set Artifactory
RUN npm config set registry "http://artifactory.otenv.com:8081/artifactory/api/npm/npm-virtual"

WORKDIR /var/www/clientside-logger
ADD . /var/www/clientside-logger
RUN npm cache clean && npm install

EXPOSE 3000

CMD ["node","app.js"]