var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/webapp'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// require no router
var frases = require('./routes/frases');

app.use('/api/frases', frases);

var server = app.listen(app.get('port'), function() {
  console.log('iniciou a bagaça');
});
