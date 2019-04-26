const gulp = require('gulp');

gulp.task('copy:dist', function (done) {
  gulp
    .src(['./src/**/*', '!./src/**/*.stories.*'])
    .pipe(gulp.dest('./dist/'));

  done();
});
