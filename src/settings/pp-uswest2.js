'use strict';

var extend = require('extend'),
    base = require(__BASE + '/settings/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-pp-uswest2.otenv.com',
    shouldPublish: true
  },
  logger: {
    console: true
  },
  env: 'pp-uswest2'
});
