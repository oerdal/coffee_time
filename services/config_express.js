// Used for getting static and view files
const path = require("path");

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