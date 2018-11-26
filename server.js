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

// Check connection
con.connect(function(error) {
    if (error) {
        throw error;
    }
    console.log("Connected to Database!")
})

// Root route to render the index.ejs view
app.get('/', function(req, res) {
    // Query our database
    var query = "SELECT * from users"
    con.query(query, function (error, result) {
        if (error) {
            return res.json({status: "Error", data: error});
        } else {
            console.log(result);
        }
    })

    // Render a temporarily front-end using ejs in views file
    res.render("index");
})

app.post("/customerRegister", function(req, res) {
    if (req.body.password != req.body.passwordConfirm) {
        return res.json({status: "Error", data: "Password does not match"});
    } 
    var query = "SELECT users.username FROM users WHERE users.username = {0};".format(req.body.username);
    con.query(query, function(error, user) {
        if (error) {
            return res.json({status: "Error", data: error});
        } else {
            if (user.length != 0) {
                return res.json({status: "Error", data: "Username already exists in the database" });
            } else {
                var successQuery = "INSERT INTO coffeeDB.users (name, username, password, created_at, updated_at)VALUES ({0}, {1}, {2}, {3}, {4});".format(req.body.name, req.body.username, req.body.password, NOW(), NOW());
                con.query(query, function (error, result) {
                    if (error) {
                        return res.json({status: "Error", data: error});
                    } else {
                        return res.json({status: "Success", data: result});
                    }
                })
            }
        }
    })
})

app.post("/customerLogin", function(req, res) {
    var emailQuery = "SELECT users.username AS username FROM users WHERE users.username={0}".format(req.body.username);
    con.query(emailQuery, function(error, result) {
        if (error) {
            return res.json({status: "Error", data: error});
        } else {
            if (result.length == 0) {
                return res.json({status: "Error", data: "Username does not exist in the database" });
            } else {
                var passwordQuery = "SELECT * FROM users WHERE users.username={0} AND users.password={1}".format(req.body.username, req.body.password);
                con.query(passwordQuery, function(error, result) {
                    if (error) {
                        return res.json({status: "Error", data: error});
                    } else {
                        if (result.length == 0) {
                            return res.json({status: "Error", data: "Username and Password does not match"});
                        } else {
                            return res.json({status: "Success", data: result})
                        }
                    }
                })
                return res.json({status: "Success", data: result});
            }
        }
    })
})

// Listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
