const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync');

const paths = require('./GulpConfig');

function html() {

  const nunjucksRender = require('gulp-nunjucks-render');
  const data = require('gulp-data');
  const htmlbeautify = require('gulp-html-beautify');

  delete require.cache[require.resolve('./src/layout.json')];

  return gulp.src('src/pages/**/*.+(html|njk)')
    .pipe(data(function() {
      return require('./src/layout.json')
    }))
    .pipe(nunjucksRender({
      path: 'src/templates',
      watch: false,
    }))
    .pipe(htmlbeautify())
    .pipe(gulp.dest(paths.html.dest));
}

function images(){
  return gulp.src(paths.images.src)
      .pipe(gulp.dest(paths.images.dest));
}

function fonts(){
  return gulp.src(paths.fonts.src)
      .pipe(gulp.dest(paths.fonts.dest));
}

function scss() {
  const sass = require('gulp-sass');
  const autoprefixer = require('autoprefixer');
  const postcss = require('gulp-postcss');
  const tailwindcss = require('tailwindcss');

  const cssnano = require('cssnano');
  return gulp.src(['src/scss/**/*.scss'])
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss([
        tailwindcss('./tailwind.js'),
        autoprefixer({browsers: ['last 4 version']}),
        cssnano()
      ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'));

}

function js() {
  const babel = require('gulp-babel');
  const concat = require('gulp-concat');

  return gulp.src(['src/js/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(babel({
        "presets": [
          "@babel/preset-env",
        ],
        "plugins": [
          "@babel/plugin-syntax-export-default-from"
        ]
      }))
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/js'));

}

function browserSync(done) {
  browsersync({
    server: {
      baseDir: paths.root
    },
  });
  done();

}

function reload(done) {
  browsersync.reload();
  done();

}

function watch() {

  gulp.watch(paths.styles.src, gulp.series(scss, reload));
  gulp.watch(paths.js.src, gulp.series(js, reload));
  gulp.watch(paths.html.src, gulp.series(html, reload));
  gulp.watch(paths.images.src, gulp.series(images, reload));
  gulp.watch(paths.fonts.src, gulp.series(fonts, reload));

}

gulp.task('default', gulp.series(html, images, scss, js, fonts));
gulp.task('serve', gulp.series(html, images, scss, js, fonts, browserSync, watch));