var router = require('express').Router();
var mw = require(__BASE + '/mw');
var pkg = require('../package.json');
var couch = require(__BASE + '/agents/couch');
var logger = require(__BASE + '/agents/logger');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/', function(req, res, next){

	return res.json({code: 'ok', version: pkg.version});

}).get('/logs', function(req, res, next){

	couch.getAllLogs(function(err, result){
		return res.json(result);
	});

}).post('/logs', jsonParser, function(req, res, next){
	couch.insertLog(req.body, function(err, result){
		return res.json(result);
	});

}).get('/logs/:id', mw.isUUID, function(req, res, next){
	couch.getLogById(req.params.id, function(err, result){
		return res.json(result);
	});
});

module.exports = router;