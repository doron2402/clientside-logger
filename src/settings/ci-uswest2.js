'use strict';

var extend = require('extend'),
    base = require(__base + '/configs/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-ci-uswest2.otenv.com',
  },
  logger: {
      console: true
  },
  env: 'ci-uswest2'
});
