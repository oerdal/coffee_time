const mysql = require('mysql')

module.exports = 
    mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "coffeeDB"
    }).connect(function(error) {
        if (error) {
            throw error;
    }
    console.log("Connected to Database!")
})