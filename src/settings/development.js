'use strict';

var extend = require('extend');
var base = require(__BASE + '/settings/base.js');

module.exports = extend(true, {}, base, {
  isDevelopment: true,
  port: 3000,
  host: '127.0.0.1',
  protocol: 'http',
  discovery: {
    shouldPublish: false
  },
  logger: {
    initTimeout: 10000
  },
  env: 'development',
  couchdb: {
    host: 'localhost',
    port: 5984,
    db: 'logs'
  }
});
