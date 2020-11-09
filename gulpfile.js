/* require */
const gulp = require('gulp')
const browserSync = require('browser-sync').create()

/* startup server */
function browsersync (cb) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  cb()
}

/*  */
function reload () {
  browserSync.reload()
}

function watch (cd) {
  browserSync.watch(['./*.html', './*.css', './*.js'], reload)
  cd()
}

/* exports */
exports.default = gulp.series(browsersync, watch)
