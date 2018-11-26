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

app.post("/register", function(req, res) {
    if (req.body.user_type.toLowerCase() == "employee") {
        var user_type = "employee";
        var store_id = req.body.store_id;
    } else if (req.body.user_type.toLowerCase() == "customer") {
        var user_type = "customer";
        var store_id = null;
    } else {
        return res.json({status: "Error", data: "Must pick a user type"});
    }

    if (req.body.password != req.body.passwordConfirm) {
        return res.json({status: "Error", data: "Password does not match"});
    } 
    var query = "SELECT users.username FROM users WHERE users.username = {0} AND users.user_type={1};".format(req.body.username, user_type);
    con.query(query, function(error, user) {
        if (error) {
            return res.json({status: "Error", data: error});
        } else {
            if (user.length != 0) {
                return res.json({status: "Error", data: "Username already exists in the database" });
            } else {
                var successQuery = "INSERT INTO coffeeDB.users (name, username, password, created_at, updated_at, user_type, store_id)VALUES ({0}, {1}, {2}, {3}, {4});".format(req.body.name, req.body.username, req.body.password, NOW(), NOW(), user_type, store_id);
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

app.post("/login", function(req, res) {
    if (req.body.user_type.toLowerCase() == "employee") {
        var user_type = "employee";
        var store_id = req.body.store_id;
    } else if (req.body.user_type.toLowerCase() == "customer") {
        var user_type = "customer";
        var store_id = null;
    } else {
        return res.json({status: "Error", data: "Must pick a user type"});
    }

    var emailQuery = "SELECT users.username AS username FROM users WHERE users.username={0} AND users.user_type={1} AND users.store_id={2}".format(req.body.username, user_type, store_id);
    con.query(emailQuery, function(error, result) {
        if (error) {
            return res.json({status: "Error", data: error});
        } else {
            if (result.length == 0) {
                return res.json({status: "Error", data: "Username does not exist in the database" });
            } else {
                var passwordQuery = "SELECT * FROM users WHERE users.username={0} AND users.password={1} AND users.user_type={2} AND users.store_id={3}".format(req.body.username, req.body.password, user_type, store_id);
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


/* 
 * route to get current drinks for a store or a user
 * if a user id is passed in the querystring, will query
 * the database for drinks matching the customer id, otherwise
 * if a store id is passed, will query the database for drinks matching
 * the store ID, otherwise will return nothing if neither are passed
*/
app.get('/user', (req, res) => {
    var id = ''
    var query = ''
    if(req.query.userId){
        id = req.query.userId
        console.log("user ID is... " + id)
        query = "SELECT * FROM user_drinks JOIN users on users_drinks.user_id = " +
                "users.id JOIN drinks on users_drinks.id = drinks.id WHERE users.id = {0}".format(id)
        
    } else if(req.query.storeId){
        id = req.query.storeId
        console.log("store ID is... " + id)
        query = "SELECT * FROM user_drinks JOIN users on user_drinks.store_id = " +
                "users.store_id JOIN drinks on user_drinks.id = drinks.id WHERE users.store_id = {0}".format(id)
    } else {
        return res.send(JSON.stringify({"status": 404, "error": "no user or store ID found"}))
    }
    con.query(query, (error, result) => {
        if(error){
            return res.send(JSON.stringify({"status": 404, "response": null, "id": id}))
        }
        // if we can successfully query the drink table for the drinks for a given
        // user or store, return the appropriate response
        return res.send(JSON.stringify({"status" : 200, "response": result, "id": id}))
    })
})

// route to get current drinks for a given store

// Listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
