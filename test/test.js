var assert = require('assert'),
    request = require('supertest'),
    path = require('path'),
    app = require('..');

var sampleFilesDir = path.join(__dirname, 'samples'),
    uploadDir = path.join(__dirname, '../files');

function notImplemented() {
  throw new Error('not implemented');
}




describe('upload tests', function() {
  
  it ('should upload a file', function(done) {
    request(app)
      .post('/')
      .attach('picture', path.join(sampleFilesDir, 'picture.png'))
      .end(function(err, res) {
        if (err) return done(err);
	done();
      });
  });

});


describe('download tests', function() {

  it ('should download a file', function() {
    notImplemented();
  });

});


