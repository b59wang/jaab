/**
 * Created by bohao on 3/5/2016.
 */
/**
 * Appends API KEY to the url.
 * @param url
 */
exports.appendApiKey = function(url){
    var config = require('../config/config');
    return url + "?api_key=" + config.riot.api.key;
};