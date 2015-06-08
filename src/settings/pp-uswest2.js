'use strict';

var extend = require('extend'),
    base = require(__base + '/configs/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-pp-uswest2.otenv.com'
  },
  logger: {
    console: true
  },
  env: 'pp-uswest2'
});
