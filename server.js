// Require express
var express = require("express");

// Create the express app
var app = express();

// Used for getting static and view files
var path = require("path");

// Parse the body of the HTTP request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up static content
app.use(express.static(path.join(__dirname, "./static")));

// Setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Require MySQL
var mysql = require("mysql");

// Create the connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "coffeeDB"
});

con.connect(function(error) {
    if (error) {
        throw error;
    }
    console.log("Connected to Database!")
})

// Root route to render the index.ejs view
app.get('/', function(req, res) {
    var query = "SELECT * from users"
    con.query(query, function (error, result) {
        if (error) {
            throw error;
        } else {
            console.log(result);
        }
    })
    res.render("index");
})

// Listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
