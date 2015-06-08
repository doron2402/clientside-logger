'use strict';

var settings = {
  development: require(__BASE + '/settings/development'),
  'ci-uswest2': require(__BASE + '/settings/ci-uswest2'),
  'pp-uswest2': require(__BASE + '/settings/pp-uswest2'),
  'prod-euwest1': require(__BASE + '/settings/prod-euwest1'),
  'prod-uswest2': require(__BASE + '/settings/prod-uswest2')
};

module.exports = process.env.NODE_ENV ? settings[process.env.NODE_ENV] : settings.development;