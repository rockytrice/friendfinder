var friendsData = require("../data/friends");


module.exports = function (app) {
    // Displays all friends
    // API GET Request
    // ===========================================================================
    app.get("/friends", function (req, res) {
        return res.json(friendsData);
    });

  // API POST Requests
// ================================================================================
    app.post("/api/friends", function (req, res) {
        
    })
}