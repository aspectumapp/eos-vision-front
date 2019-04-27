const gulp = require('gulp');

gulp.task('copy:dist', function () {
  gulp
    .src(['./src/**/*', '!./src/**/*.stories.*'])
    .pipe(gulp.dest('./dist/'))
  ;
});
