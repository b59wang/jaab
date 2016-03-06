/**
 * Created by bohao on 3/5/2016.
 */
var config = {};
config.riot = {};
config.riot.api = {};
config.riot.api.champion = {};
config.web = {};

/* riot api config */
config.riot.api.base = "https://na.api.pvp.net/api/lol/";
config.riot.api.key = process.env.RIOT_API_KEY || 'api-key';
config.riot.api.region = "na";

/* riot champion endpoint */
config.riot.api.champion.version = "v1.2";
config.riot.api.champion.url = config.riot.api.base + "static-data/" +  config.riot.api.region + "/"+ config.riot.api.champion.version + "/champion/";

/* web config */
config.web.port = process.env.WEB_PORT || 8080;

module.exports = config;
