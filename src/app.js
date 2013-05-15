/* Index */

/* Start up code */
var config = require('nor-config').from(__dirname);
require('nor-api').setup(config, {
	'routes': {

		/** We will instantly return an object here BUT this style still supports 
		 * async -- you could return promises. These functions take the two standard 
		 * options (req, and res) that we don't use here.
		 * @param req HTTP(S) Request object
		 * @param res HTTP(S) Response object
		 * @param returns Async promise or the reply itself.
		 */
		'index': function() {
			return {'msg':'Hello World'};
		}
	}
});

/* EOF */
