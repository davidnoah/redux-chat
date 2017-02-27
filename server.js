// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path       = require('path');           // define path using path module
var cors       = require('cors');           // cors module
var port = process.env.PORT || 8080;        // set our port

// enable cross origin requests
app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serves our public folder
app.use(express.static(path.join(__dirname, 'public')));

// Out API routes file
app.use('/api', require('./routes/api.js'));

// catch all route to ensure the router and server cooperate
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// START THE SERVER
// =============================================================================
app.listen(port);            // returns HTTP server instance

console.log(`API running at localhost:${port}/api`);
