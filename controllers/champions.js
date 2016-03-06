/**
 * Created by bohao on 3/5/2016.
 */
/**
 * /champions/{championID}
 *
 * Get Champion info for a champion ID
 * @param req request object
 * @param res result object
 */
exports.getChampion = function(req, res){
    var championID = req.params.championID;
    // Check if id type and null
    if (championID == null || isNaN(championID)) {
        console.log('This is not number');
        res.status(400).send("Bad request: Champion ID is missing.");
        return;
    }
    console.log("Get champion by id: " + req.params.championID);

    // Load module
    var request = require('request');
    var config = require('../config/config');
    var urlUtil = require('../util/urlUtil');

    // build url for riot
    var requestUrl =  config.riot.api.champion.url + championID;

    requestUrl = urlUtil.appendApiKey(requestUrl);
    console.log(requestUrl);

    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(body);
        } else {
            res.status(response.statusCode).send(error);
        }
    });
};

/**
 * /champions/{championID}/summoner/{summonerID}
 *
 * Get Champion info for a champion ID
 * @param req request object
 * @param res result object
 */
exports.getSummoner = function(req, res){
    console.log("Get summoner "+ req.params.summonerID + "'s game info for champion: " + req.params.championID);
    res.send([{
        "id": 1,
        "summoner": "This is a test json"
    }]);
};
