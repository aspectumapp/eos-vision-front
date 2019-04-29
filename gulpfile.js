const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const del = require('del');
const gulpSvgSprite = require('gulp-svg-sprites');

const constants = require('./config/constants');

gulp.task('clean:dist', function(){
  return del(`${constants.DIST_DIR}/**`, {force:true});
});

gulp.task('copy:dist', function () {
  gulp
    .src(`${constants.SRC_DIR}/assets/**/*`)
    .pipe(gulp.dest(`${constants.DIST_DIR}/assets/`))
  ;

  gulp
    .src([`${constants.SRC_DIR}/ui/**/*.tsx`, `!${constants.SRC_DIR}/ui/**/*.stories.tsx`])
    .pipe(gulp.dest(`${constants.DIST_DIR}/ui/`))
  ;

  gulp
    .src(`${constants.SRC_DIR}/ui/**/*.less`)
    .pipe(gulp.dest(`${constants.DIST_DIR}/ui/`))
  ;
});

gulp.task('svg:sprite', function() {
  return gulp.src(path.join(constants.ASSETS_ROOT, 'images', 'sprite-svg-source', '*.svg'))
    .pipe(gulpSvgSprite({
      templates: {
        css: fs.readFileSync(path.join(constants.ASSETS_ROOT, 'config', 'svgSpriteCssTemplate'))
      },
      cssFile: 'sprite.less',
      svgPath: '%f',
      common: 'svg-icon',
      svg: {
        sprite: 'sprite.svg'
      },
      preview: {
        sprite: ''
      },
      cleanconfig: {
        plugins: [
          {
            cleanupIDs: false
          }
        ],
      }
    }))
    .pipe(gulp.dest(path.join(constants.ASSETS_ROOT, 'images', 'svg-sprite')))
  ;
});
