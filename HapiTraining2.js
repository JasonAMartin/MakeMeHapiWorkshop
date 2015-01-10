/**
 * Jason A. Martin Twitter: @jasonamartin
 * MakeMeHapi Lesson 2: Routes
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
	path: '/{name}',
	handler: trainingFun
});

function trainingFun(request,reply){
	var name = request.params.name;
	reply("Hello " + name);
}

//start up the server
server.start();