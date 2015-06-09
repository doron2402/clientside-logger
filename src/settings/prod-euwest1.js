'use strict';

var extend = require('extend'),
    base = require(__BASE + '/settings/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-prod-euwest1.otenv.com',
    shouldPublish: true
  },
  logger: {
    console: true
  },
  env: 'prod-euwest1'
});
