const express 		= require('express');
let app 			= express();
const bodyParser 	= require('body-parser');

let routes = require('./routes/routes.js')
const port = process.env.PORT || 1001;
//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(routes);

let server = app.listen(port, function () {	
		console.log("\nApplication started listening port test " + port);
		//let cacheClient = new CacheClient();

});








