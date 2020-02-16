const express = require('express');
const app = express();
const port = 3000;


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var path = require('path');
var routes = require('./server/config/routes.js')(app);;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
