//db.js
var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/P_PSPLC';
mongoose.connect(dbURI);

//logging
mongoose.connection.on('Connected', function()
	{
		console.log('Mongoose connected to ' +dbURI);
	});
mongoose.connection.on('Error', function()
	{
		console.log('Mongoose connection error.');
	});
mongoose.connection.on('Disconnected', function()
	{
		console.log('Mongoose disconnected');
	});

// Shutdown
var gracefulShutdown = function(msg,callback)
{
	mongoose.connection.close(function()
	{
		console.log('Mongoose disconnected through ' +msg);
	});
};

//Nodemon
process.once('SIGUSR2', function()
	{
		gracefulShutdown('Nodemon restart', function()
		{
			process.kill(process.pid, 'SIGUSR2');
		});
	});
process.on('SIGINT', function()
	{
		gracefulShutdown('app termination', function()
		{
			process.exit(0);
		});
	});