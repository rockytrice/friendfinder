
var friendsData = require("../data/friends");


module.exports = function(app) {
// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });


// app.post("/api/friends", function(req, res) {



}