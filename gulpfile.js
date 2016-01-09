var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['browser-sync'], function() {
  console.log('Server has been started');
});
