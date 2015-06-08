# Client Side logger

1. RUN COUCH DB
  1. docker pull klaemo/couchdb:latest
  2. # expose it to the world on port 5984[sudo] docker run -d -p 5984:5984 --name couchdb klaemo/couchdb
  3. curl http://localhost:5984

2. Run API
  1. npm install && npm start
