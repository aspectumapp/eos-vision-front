const gulp = require('gulp');
const del = require('del');

const constants = require('./config/constants');

gulp.task('clean', function(){
  return del(`${constants.DIST_DIR}/**`, {force:true});
});

gulp.task('copy:dist', ['clean'],  function () {
  gulp
    .src([`${constants.SRC_DIR}/**/*`, `!${constants.SRC_DIR}/**/*.stories.*`])
    .pipe(gulp.dest(`${constants.DIST_DIR}/`))
  ;
});
