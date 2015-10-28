
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var distance = require('google-distance');

var bodyParser = require('body-parser');
var origin;
var destination;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());



app.post('/googlemaps', function (req, res) {
 origin=req.body.origin;
 destination=req.body.destination;
console.log(origin);
console.log(destination);
 distance.get(
  {
    origin: req.body.origin,
    destination: req.body.destination,
    mode:'driving',
    units:'imperial'
  },
  function(err, data) {
    if (err) return console.log(err);
   res.json(data);
   });
 


});

app.listen(8080);
console.log("server running 8080");