var mw = {};
var logger = require(__BASE + 'agents/logger');

mw.errorHandler = function(err, req, res, next) {
	if (err){
		logger.error(err);
	}
	return res.json({code: err, error: JSON.stringify(err)});
};
module.exports = mw;