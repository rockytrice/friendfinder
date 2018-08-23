var friendsData = require("../data/friends");


module.exports = function (app) {
    // Displays all friends
    // API GET Request
    // ===========================================================================
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

  // API POST Requests
// ================================================================================
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);
      
        friends.push(newFriend);
      
        res.json(newFriend);

    })
}