var friendsData = require("../data/friends");


module.exports = function (app) {
    // Displays all friends
    // API GET Request
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);
      
        fiends.push(newFriend);
      
        res.json(newFriend);

    })
}