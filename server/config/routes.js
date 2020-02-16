var controller = require('../controller/controller.js');

module.exports = function(app){

	app.get('/', function(req,res){
		controller.view(req,res);
	})
	app.get('/plot/:id', function(req,res){
		controller.plot(req,res);
	})
	app.post('/findlot', function(req,res){

		controller.findlot(req,res);
		//console.log(req);
	})

	app.post('/updateSpace', function(req,res){

		controller.updateSpace(req,res);
	})
	app.get('/signin', function(req,res){
		controller.signin(req,res)
	})
	
}