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
        console.log('route hit');
        res.json(friendsData);

        let userInput = req.body.name;
        let userPhoto = req.body.photo;
        let userScore = req.body.scores;
        bestMatch();

        // determine the user's best match==================================================
        function bestMatch() {

            // loop through the friends arrray
            for (var i = 0; i < friendsData.length; i++) {
                // looping through the users input scores
                for (var j = 0; J < userScore.length; I++) {

                }

            }

        }











    });
}