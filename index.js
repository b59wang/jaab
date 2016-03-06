/**
 * Created by bohao on 3/5/2016.
 */
var express = require('express');
var config = require('./config/config');

var app = express();
app.set('port', config.web.port);

require('./routes')(app);
app.listen(app.get('port'), function(){
   console.log("Express started on port " + config.web.port)
});