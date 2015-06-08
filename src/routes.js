var router = require('express').Router();
var pkg = require('../../package.json');
router.get('/', function(req, res, next){
	return res.json({code: 'ok', version: pkg.version});
});
module.exports = router;