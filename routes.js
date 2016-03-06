/**
 * Created by bohao on 3/5/2016.
 */
module.exports = function(app){
    var champions = require('./controllers/champions');
    /* Get a single champion with ID */
    app.get('/champions/:championID', champions.getChampion);
    /* Get a user's champion info */
    app.get('/champions/:championID/summoners/:summonerID',champions.getSummoner);
}
