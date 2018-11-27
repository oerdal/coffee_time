// Require express
const express = require("express");

// Create the express app
const app = express();

// include root route handler '/'
require('./routes/root')(app)
// include route handlers for registration and login
require('./routes/user_credentials')(app)
// include route handler for fetching drinks by
// store ID, or customesr ID
require('./routes/get_drinks')(app)
// configure express app settings
require('./services/config_express')(app, express)
// create mySQL connection
const con = require('./services/connection')

// Listen on host service specified port, if developing
// locally, will default to port 8000 instead
const PORT = process.env.PORT || 8000
app.listen(PORT, function() {
    console.log("listening on port ", PORT);
});
