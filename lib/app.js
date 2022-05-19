"use strict";

var express = require('express');

var app = express();
app.use(express.json());
app.get('', function (req, res) {
  res.render('index', {
    title: 'Crowdfunding'
  });
});
module.exports = app;