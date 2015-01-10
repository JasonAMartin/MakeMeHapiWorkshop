/**
 * Jason A. Martin Twitter: @jasonamartin
 * MakeMeHapi Lesson 3: Handling
 * Git for MakeMeHappi: https://github.com/hapijs/makemehapi
 * Below was my code for the task at hand. If I decided to refactor anything, the old code will be commented out
 *
 * As a side note to this lesson, MakeMeHapi can be a little frustrating if you're using an editor that formats code in any way.
 * While the server succeeded in directing the response to index.html, MakeMeHapi failed my example due to spacing in the HTML file, which was not relevant for the training at hand.
 * For example, I use tabs not spaces and it didn't like that. Despite the data being correct, it expected HTML tags to be exactly in a certain spot (indented 4 spaces).
 * I had to jump out of WebStorm (tear) and touch a file manually with VI to pass this test.
 */

//req Hapi
var Hapi = require("hapi");
//create server & port
var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

//general default GET routing to /public
//NOTE: You can do an anon function for the handler if you want. I like some separation, so I did it a little differently than the official solution.
server.route({
	method: 'GET',
	path: '/',
	handler: {
		file: "index.html"
	}
});

//start up the server
server.start();