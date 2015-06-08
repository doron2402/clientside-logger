'use strict';

module.exports = {
  port: process.env.PORT0,
  host: process.env.TASK_HOST,
  protocol: 'http',
  discovery: {
    service: '',
    serviceType: 'clientside-loggin',
    shouldPublish: true,
    announceFailureRetryTimeout: 5000
  },
  logger: {
    redis: {
      host: '',
      port: 6379,
      listname: 'logstash'
    },
    servicetype: 'clientsidelogs',
    initTimeout: 1000,
    console: true
  },
  isDevelopment: false,
  env: process.env.NODE_ENV
};