'use strict';

var extend = require('extend'),
    base = require(__base + '/configs/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-pp-uswest2.otenv.com'
  },
  restaurant: {
    url: 'http://restaurant-pp.otenv.com/'
  },
  srs: {
    url: 'http://srs-pp.otenv.com/v1/'
  },
  logger: {
      console: false
  },
  env: 'pp-uswest2'
});
