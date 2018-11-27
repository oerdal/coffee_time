// Used for getting static and view files
const path = require("path");

/*
 * this file configures a variety of settings
 * for our express app objec, including the use
 * of HTTP bodyparser, managing static content,
 * and setting up ejs
*/
module.exports = (app, express) => {
    // Parse the body of the HTTP request
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));

    // Setting up static content
    app.use(express.static(path.join(__dirname, "../static")));

    // Setting up ejs and our views folder
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
}