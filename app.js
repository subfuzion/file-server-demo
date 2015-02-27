var express = require('express'),
    app = express(),
    debug = require('debug')('app'),
    morgan = require('morgan'),
    multer = require('multer'),
    path = require('path');

module.exports = app;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({
  dest: './uploads',
  rename: function(fieldName, fileName) {
    return fileName;
  },
  onError: function(err, next) {
    console.error(err);
    next(err);
  },
  onFileUploadComplete: function(file, req, res) {
    console.log('%s uploaded to ', file.fieldName, file.path);
  }
}));

app.get('/ping', function(req, res) {
  res.send('ping');
});

