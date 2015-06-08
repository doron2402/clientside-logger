'use strict';

var extend = require('extend'),
    base = require(__base + '/configs/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-prod-euwest1.otenv.com'
  },
  logger: {
    redis: {
      host: 'logging-prod-euwest1.otenv.com'
    },
    console: true
  },
  env: 'prod-euwest1'
});
