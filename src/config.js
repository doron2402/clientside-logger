'use strict';

var config;

config = {
  development: require(__base + '/configs/development'),
  'ci-uswest2': require(__base + '/configs/ci-uswest2'),
  'pp-uswest2': require(__base + '/configs/pp-uswest2'),
  'prod-euwest1': require(__base + '/configs/prod-euwest1'),
  'prod-uswest2': require(__base + '/configs/prod-uswest2')
};

module.exports = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config.development;