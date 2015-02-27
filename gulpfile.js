var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


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
  // tell nodemon what to start and what extensions to watch
  var server = {
    script: './bin/server',
    ext: 'js json'
  };

  // start nodemon
  nodemon(server);
});


