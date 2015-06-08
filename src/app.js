'use strict';
//Set global here.
if (!global.__BASE) {
  global.__BASE = __dirname;
}

var express = require('express');
var config = require(__BASE + 'config');
var app = express();
var mw = require(__BASE + '/mw');
var routes = require(__base + '/routes');
var DiscoveryClient = require(__base + '/agents/discovery');

app.set('host', config.host).set('port', config.port).set('env', process.env.NODE_ENV || 'development');

app
  .use(routes)
  .use(middleware.errorHandler);

logger.init(function () {
  salesforce
    .authenticate()
    .then(function () {
      app
        .listen(app.get('port'), function () {
          logger.log({
            message: 'App Started',
            logname: 'start',
            host: app.get('host'),
            port: app.get('port'),
            env: app.get('env')
          });

          var discovery = new DiscoveryClient();
          discovery.BeginPublishing();
        });
    });
});
