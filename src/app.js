/* Setup our API */

var config = require('nor-config').from(__dirname);
config._def('docroot', require('path').join(__dirname, '..', 'docroot');
require('nor-api').createServer(config, {
	'docroot': config.docroot,
	'routes': {
		
		/* Plain objects and variables */

		// Strings
		'subject': 'This is an example API.',

		// Numbers
		'id': 123456,

		// Booleans
		'active': true,

		// Dates
		'updated': new Date(),

		// Objects
		'foo': {
			'hello': 'world'
		},

		/* Arrays */
		'colors': [
			'blue',
			'black',
			'orange',
			'red',
			'green'
		],

		/* Functions */

		/** We will instantly return an object here BUT this style still supports 
		 * async -- you could return promises. These functions take the two standard 
		 * options (req, and res) that we don't use here.
		 * @param req HTTP(S) Request object
		 * @param res HTTP(S) Response object
		 * @param returns Async promise or the reply itself.
		 */
		'hello': function() {
			return {'reply':'Hello World'};
		}

	}
});

/* EOF */
