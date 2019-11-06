// server.js

// BASE SETUP
// ==============================================

var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var port     = process.env.PORT || 5000;    

mongoose.connect('mongodb+srv://matias123:matias123@mytinerarycluster-ymxpj.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

// we'll create our routes here

// get an instance of router
var router = express.Router();

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/test', function(req, res) {
    res.send('HELLO WORLD'); 
});

// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);