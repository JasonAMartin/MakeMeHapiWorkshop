/**
 * Jason A. Martin Twitter: @jasonamartin
 * MakeMeHapi Lesson 5: Views
 * Git for MakeMeHappi: https://github.com/hapijs/makemehapi
 * Below was my code for the task at hand. If I decided to refactor anything, the old code will be commented out
 *
 * Note: After the test verified, I played around by altering the handler to pass in data to the template (context)
 */

//req Hapi
var Hapi = require("hapi");
var Path = require("path");

//create server & port
var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.views({
	engines:{
		html: require('handlebars')
	},
	path: Path.join(__dirname, '/templates')
});

server.route({
	method: 'GET',
	path: '/',
	handler: {
		view: {
			template: 'index',
			context: {
				custom: 'blah'
			}
		}
	}
});

//start up the server
server.start();
