var logger = require('ot-logger');
var settings = require(__BASE + '/config');
var pkg = require('../../package.json');

function requestMetadataMapper(streamMetadata, req/*, res*/) {
  streamMetadata['x-forwarded-for'] = req.headers['x-forwarded-for'];
  streamMetadata['x-forwarded-for-first-ip'] = (streamMetadata['x-forwarded-for'] || '').split(',')[0];
  streamMetadata['ot-originalurl'] = req.headers['ot-originalurl'];

  // Since we also serve assets in development and those requests won't
  // have a domain or user or locale or most other middleware-filled things
  // we should make sure that we aren't assuming they'll be there.
  streamMetadata['ot-domain'] = (req.domainInfo && req.domainInfo.TopLevelDomain);

  // TODO: is this right? I don't think so.
  // Need to look at req.i18n?.getLocale() from start-page
  // req.domainInfo.LanguageCode should be an array of languages.
  // This needs to be verified before we start supporting non .com domains.
  streamMetadata['accept-language'] = (req.domainInfo && req.domainInfo.LanguageCode);
  streamMetadata['ot-userid'] = (req.user && req.user.GlobalPersonId);
  streamMetadata['ot-isredesign2014'] = true;
  streamMetadata['ot-currentpage'] = settings.discovery.service;
  streamMetadata.env = settings.env;
  return streamMetadata;
}

logger.initFromPackage(pkg, {
  environment: settings.env,
  requestMetadataMapper: requestMetadataMapper,
  servicetype: 'searchsitenode',
  formatversion: 'v1'
});

export default logger;
