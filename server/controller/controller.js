var myController = {}

myController.view = function(req,res){
	res.render('index');
}
myController.plot = function(req,res){
	res.render('plot');
}
myController.findlot = function(req,res){

	//TODO: Parse req to redirect to the right parking lot 
	var plotID = 1;
	res.redirect('/plot/'+ plotID);
}

myController.updatePlot = function(req,res){
	//TODO: Updates the parking lot
}

myController.showPlot = function(req,res){
	//TODO: pull parking lot info from database and give it to the PLOT page
}

myController.updateSpace = function(req,res){
	//TODO: Modify one parking space
	res.redirect('/plot/1');
}


//Login Registration

myController.signin = function(req,res){
	//login

	/*var mysql = require('mysql')
	var connection = mysql.createConnection({
  	host: 'localhost',
  	user: 'root',
  	password: '',
  	database: 'mydb'
})

	connection.connect() */

	// this.connectToDB(req,res);

	// this.connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
 	// if (err) throw err
 	// console.log('The solution is: ', rows[0].solution)
	// })
 //connection.end()
	// res.redirect('/');
}

myController.signup = function(req,res){
	//registration

	//TODO : parse user information then query information into DB

}

module.exports = myController;