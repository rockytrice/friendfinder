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
            var userScore = req.body.scores;
            bestMatch();

            // determine the user's best match==================================================
            function bestMatch() {
                var totalDiff = 0;
                var differResult = [];
                var closestMatch = 0;


                // loop through the friends arrray
                for (var i = 0; i < friendsData.length; i++) {
                    // looping through the users input scores
                    for (var j = 0; j < userScore.length; j++) {
                        totalDiff += Math.abs(friendsData[i].scores[j] - userScore[j]);
                    }
                    differResult.push(totalDiff);
                    console.log(totalDiff);
                    console.log(userScore);
                    
                };
                
                for(var i = 0; i < differResult.length; i++){
                    

                    if (differResult[i] < lowestScore){
                        // placeholder number becomes lowest difference number
                        lowestScore = differencesArray[i];
                        // store the lowest difference
                        closestMatch = i;
                    }
    
                }
                console.log(closestMatch);

            }



    })
}

// did not finish the logic.... just couldnt wrap my head around it
// i understood the routing phase. what needs to be finished is the logic to get the best match and displaying the match to the page in the modal