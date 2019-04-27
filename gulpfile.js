const gulp = require('gulp');

gulp.task('copy:dist', function () {
  gulp
    .src(['./src/**/*', '!./src/**/*.stories.*'])
    .pipe(gulp.dest('./dist/'))
  ;
});

gulp.task('copy:semantic-ui-less', function () {
  gulp
    .src('./node_modules/semantic-ui-less/definitions/**/*')
    .pipe(gulp.dest('./src/assets/semantic-custom/definitions/'))
  ;

  gulp
    .src('./node_modules/semantic-ui-less/themes/**/*')
    .pipe(gulp.dest('./src/assets/semantic-custom/themes/'))
  ;
});
