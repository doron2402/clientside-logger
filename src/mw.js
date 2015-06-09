var mw = {};
var logger = require(__BASE + '/agents/logger');
var lil = require('lil-uuid');

mw.errorHandler = function(err, req, res, next) {
	if (err){
		logger.error(err);
	}
	return res.json({code: err, error: JSON.stringify(err)});
};

mw.isUUID = function(req, res, next) {
	var err = null;
	if (!lil.isUUID(req.params.id)){
		err = 'Not a UUID';
	}
	return next(err);
};

module.exports = mw;