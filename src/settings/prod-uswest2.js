'use strict';

var extend = require('extend'),
    base = require(__BASE + '/settings/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-prod-uswest2.otenv.com'
  },
  logger: {
    redis: {
      host: 'logging-prod-uswest2.otenv.com'
    },
    console: false
  },
  env: 'prod-uswest2'
});
