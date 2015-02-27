var express = require('express'),
    app = express(),
    debug = require('debug')('app'),
    morgan = require('morgan');

module.exports = app;

app.use(morgan('dev'));

app.get('/', function(req, res) {

  res.send('ping');
});


