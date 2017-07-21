var gulp = require('gulp');
var connect = require('gulp-connect');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  gulp.src(['bower_components/**/*']).pipe(gulp.dest('app/bower_components'));
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html', './app/**/*.js', './app/**/*.css'], ['html']);
});

gulp.task('html', function () {
  gulp.src(['./app/**/*.html','./app/**/*.js', './app/**/*.css'])
    .pipe(connect.reload());
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
