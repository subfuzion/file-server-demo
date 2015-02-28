var express = require('express'),
    app = express(),
    debug = require('debug')('app'),
    morgan = require('morgan'),
    multer = require('multer'),
    path = require('path');

module.exports = app;

app.use(morgan('dev'));

/**
 * use static middleware to serve upload page
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * use multer middleware to handle file uploads to the app
 */
app.use(multer({
  dest: './files',
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

