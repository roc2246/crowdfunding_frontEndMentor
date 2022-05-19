"use strict";

var path = require('path');

var express = require('express');

var _require = require('express'),
    request = _require.request;

var app = express();
var port = process.env.PORT || 3000; // Define paths for Express config

var publicDirectoryPath = path.join(__dirname, '../public'); // Setup static directory to serve

app.use(express.static(publicDirectoryPath));
app.get('', function (req, res) {
  res.render('index', {
    title: 'Crowdfunding',
    name: 'Riley Childs'
  });
});
app.listen(port, function () {
  console.log('Server is up on port ' + port);
});