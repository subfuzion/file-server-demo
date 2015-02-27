var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');


/**
 * gulp - default task, this task doesn't do anything; it
 *        will just delegate to the run task for convenience
 */
gulp.task('default', ['run'],  function() {
});


/**
 * gulp run - starts up server and restarts on file changes
 */
gulp.task('run', function() {
  // tell nodemon what to start, what extensions to watch, and pass env for debug module
  var server = {
    script: './bin/server',
    ext: 'js json',
    env: { 'DEBUG': '*,-express:*' }
  };

  // start nodemon
  nodemon(server);
});

gulp.task('jshint', function() {
  return gulp.src(['./app.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter());
});


