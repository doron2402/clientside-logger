'use strict';

var config;

config = {
  development: require(__BASE + '/configs/development'),
  'ci-uswest2': require(__BASE + '/configs/ci-uswest2'),
  'pp-uswest2': require(__BASE + '/configs/pp-uswest2'),
  'prod-euwest1': require(__BASE + '/configs/prod-euwest1'),
  'prod-uswest2': require(__BASE + '/configs/prod-uswest2')
};

module.exports = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config.development;