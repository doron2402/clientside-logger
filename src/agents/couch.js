var config = require(__BASE + '/config');
var nano = require('nano')('http://'+config.couchdb.host+':' + config.couchdb.port + '/' + config.couchdb.db);
var couch = {};
var lil = require('lil-uuid');

couch.insertLog = function(log, cb) {
	var docId = lil();
	nano.insert(log, docId, function(err, body) {
	  if (err){
	    return cb(err, {code: 'error', error: err});
	  } else {
			return cb(err, {code: 'ok', docs: body});
	  }
	});
};

couch.getAllLogs = function(cb) {
	nano.list(function(err, body){
		if (err) {
			return cb(null, {code: 'error', error: err});
		} else {
			return cb(null, {code: 'ok', docs: body});
		}
	});
};

couch.getLogById = function(id, cb) {
	nano.get(id, { revs_info: true }, function(err, body){
		if (err) {
			return cb(null, {code: 'error', error: err});
		} else {
			return cb(null, {code: 'ok', docs: body});
		}
	});
};
module.exports = couch;