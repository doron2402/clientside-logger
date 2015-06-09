'use strict';
//Set global here.
if (!global.__BASE) {
  global.__BASE = __dirname;
}

var express = require('express');
var config = require(__BASE + '/config');
var mw = require(__BASE + '/mw');
var routes = require(__BASE + '/routes');
var logger = require(__BASE + '/agents/logger');
var couch = require(__BASE + '/agents/couch');
var DiscoveryClient = require(__BASE + '/agents/discovery');

var app = express();
var discovery = new DiscoveryClient();

app.set('host', config.host).set('port', config.port).set('env', process.env.NODE_ENV || 'development');

app
  .use(routes)
  .use(mw.errorHandler)
  .listen(app.get('port'), function () {
    logger.info('Starting App: ' + app.get('host') + ':' + app.get('port') + ' Env: ' + app.get('env'));
    discovery.BeginPublishing();
});

process.on('exit', function () {
  console.log('About to exit.');
  discovery.Unannounce();
});