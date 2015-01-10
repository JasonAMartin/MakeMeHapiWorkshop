/**
 * Jason A. Martin Twitter: @jasonamartin
 * MakeMeHapi Lesson 4: Directories
 * Git for MakeMeHappi: https://github.com/hapijs/makemehapi
 * Below was my code for the task at hand. If I decided to refactor anything, the old code will be commented out
 */

//req Hapi
var Hapi = require("hapi");
//create server & port
var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({
	method: 'GET',
	path: '/foo/bar/baz/{reqFile}',
	handler: {
		directory: { path: './public' }
	}
});

//start up the server
server.start();

/**
 * NOTE: Official solution REQ'd PATH and used join to do __dirname and public.
 *
 * FIRST:
   var PATH = require("path");
 *
 *  THEN FOR HANDLER:
    handler: {
            directory: {
                path: Path.join(__dirname, '/public')
            }
        }
 */
