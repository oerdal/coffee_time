// include mysql
const mysql = require('mysql')
module.exports = (app, con) => {
    // Root route to render the index.ejs view
    app.get('/', function(req, res) {
        // Query our database
        var query = "SELECT * from users"
        var con = require('../services/connection')
        con.query(query, (error, results) => {
            if(error){
                console.log(error)
            }
            console.log("Successful query")
        })
        
        // Render a temporarily front-end using ejs in views file
        return res.render("index");
    })
}