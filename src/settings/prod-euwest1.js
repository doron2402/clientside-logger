'use strict';

var extend = require('extend'),
    base = require(__base + '/configs/base.js');

module.exports = extend(true, {}, base, {
  discovery: {
    service: 'discovery-prod-euwest1.otenv.com'
  },
  restaurant: {
    url: 'http://restaurant-ln.otenv.com/'
  },
  srs: {
    url: 'http://srs-ln.otenv.com/v1/'
  },
  userService: {
    url: 'http://int-eu-svc.otsql.opentable.com/user/'
  },
  logger: {
    redis: {
      host: 'logging-prod-euwest1.otenv.com'
    },
    console: false
  },
  salesforce: {
    username: '0138a166ba8081f22f5f1d26f93ddda79fc22e2e10ac37784689f9acb256baf9',
    password: '091c6f027a19abeb2d1f13cc490eddb2eebf99e98c5aa3026dafa22024bc85e4903a2ab202c0c4cf06d17ddb7939878b',
    loginUrl: 'https://salesforce.com',
    recordTypeId: '012a0000001ZU0MAAW',
    ownerId: '00Ga00000041GNm',
    ridsCacheFile: __base + '/caches/ridToAccountId.csv',
    areCredentialsEncrypted: true
  },
  env: 'prod-euwest1'
});
