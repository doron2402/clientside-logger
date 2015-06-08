'use strict';

var Discovery = require('ot-discovery');
var config = require(__BASE + '/config');
var logger = require(__BASE + '/agents/logger');
var discoveryLogger;

discoveryLogger = {
  logger: {
    log: function () { },
    error: function () { console.error.apply(console, arguments); }
  }
};

function DiscoveryWrapper() {
  this.discovery = new Discovery(config.discovery.service, discoveryLogger);
}

DiscoveryWrapper.prototype.Connect = function () {
  var self = this;
  self.discovery.connect(function (error) {
    if (error) {
      logger.log('Discovery connect error: ' + error);
    }

    try {
      self.Announce();

      process.on('SIGTERM', function () { self.Unannounce(); });
      process.on('SIGINT', function () { self.Unannounce(); });
      return;
    } catch (err) {
      logger.log('Discovery announce error: ' + err);
    }

    setTimeout(function () {
      self.Connect();
    }, config.discovery.announceFailureRetryTimeout);
  }.bind(this));
};

DiscoveryWrapper.prototype.Announce = function () {
  this.discovery.announce({
    serviceType: config.discovery.serviceType,
    serviceUri: config.getUri()
  }, function (error, lease) {
    if (error) {
      logger.error(error);
      return;
    }

    logger.log({ message: 'Announced', lease: lease, logname: 'announced' });
    this.lease = lease;
  }.bind(this));
};

DiscoveryWrapper.prototype.Unannounce = function () {
  logger.log({ message:'Unannounced', lease: this.lease, logname: 'unannounced' });
  this.discovery.unannounce(this.lease);
  setTimeout(process.exit, 10000, 0);
};

DiscoveryWrapper.prototype.BeginPublishing = function () {
  if (!config.discovery.shouldPublish) {
    logger.log('Discovery - Publishing is Disabled');
    return;
  }

  logger.log('Discovery - Publishing to ' + config.discovery.service);
  var discovery = new DiscoveryWrapper();
  discovery.Connect();
};

module.exports = DiscoveryWrapper;
