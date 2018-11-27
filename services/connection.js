/*
 * this file create a mysql connection
 * object, and exports this object, to execute
 * queries in other files, simply use
 * var x = require('../services/connection')
*/
const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "coffeeDB"
})

module.exports = con