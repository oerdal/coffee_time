// Require express
const express = require("express");
// include passportConfig, will be used for OAuth, specifically
// using the passport.js OAuth library
const passportConfig = require('./services/passport')
// Create the express app
const app = express();
// configure express app settings
require('./services/config_express')(app, express)
// include root route handler '/'
require('./routes/root')(app)
// include route handlers for registration and login
require('./routes/user_credentials')(app)
// include route handler for fetching drinks by
// store ID, or customer ID
require('./routes/get_drinks')(app)

// Listen on host service specified port, if developing
// locally, will default to port 8000 instead
const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log("listening on port ", PORT);
});
