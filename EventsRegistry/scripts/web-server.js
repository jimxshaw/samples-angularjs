// Grabs the necessary libraries.
var express = require('express');
var path = require('path');

var app = express();
var rootPath = path.normalize(__dirname + '/../');

// Static method serves the files in the path directory without
// processing them.
app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening on port 8000...');