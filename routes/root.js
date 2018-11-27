const mysql = require('mysql')

module.exports = (app) => {
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
        return res.render("index");
    })
}