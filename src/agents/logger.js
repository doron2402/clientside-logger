var logger = require('ot-logger');
var settings = require(__BASE + '/config');
var pkg = require('../../package.json');

function requestMetadataMapper(streamMetadata, req/*, res*/) {
  streamMetadata.env = settings.env;
  return streamMetadata;
}



logger.initFromPackage(pkg, {
  environment: settings.env,
  requestMetadataMapper: {
    env: settings.env || 'dev'
  },
  servicetype: 'clientside-logger',
  formatversion: 'v1'
});

module.exports = logger;
