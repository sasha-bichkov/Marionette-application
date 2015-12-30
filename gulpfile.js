// загружаем необходимые модули
var gulp = require('gulp');
var browserSync = require('browser-sync');

//создаём задачу 'browser-sync', чтобы поднять локальный сервер
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

//когда вводим 'gulp' в консоли, то по умолчанию вызывается задача
//'default'. Передаём ей задачу 'browser-sync' на вызов.
gulp.task('default', ['browser-sync'], function() {
  console.log('Server has been started');
});
