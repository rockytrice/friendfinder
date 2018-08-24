// DEPENDENCIES
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// ===========================================================
var app = express();
var PORT = process.env.PORT || 8080;
// was getting error saying refused to apply style from my css file because of MIMe type (text/html) is not supported.
// did some googling and found this to work!!!
app.use(express.static('app/public'));
// Sets up the Express app to handle data parsing
// ============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// ============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  