/* Setup our API */

var config = require('nor-config').from(__dirname);
config._def('docroot', require('path').join(__dirname, '..', 'docroot'));
require('nor-api').createServer(config, {
	'docroot': config.docroot,
	'routes': require('./routes.js')
});

/* EOF */
