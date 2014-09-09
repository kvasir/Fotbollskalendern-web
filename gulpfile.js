var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');


gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('connectDev', function () {
  connect.server({
    root: ['app', 'tmp'],
    port: 9000,
    livereload: true,
    middleware: function (connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              )
            ];
    }
  });
});

gulp.task('default', ['connectDev', 'watch']);