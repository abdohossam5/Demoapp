var express = require('express');
var path = require('path');
var evens = require('./eventsController');
var app = express();
var rootPath= path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id',events.save);
app.listen(8000);
console.log("running on 8000");