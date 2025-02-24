import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser, { reload } from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import svgstore from 'gulp-svgstore';
import webp from 'gulp-webp';
import {deleteAsync} from 'del';
//import squoosh from 'gulp-libsquoosh';

//Images

export const image = () => {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'));
}


export const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
  .pipe(gulp.dest('build/img'));
}

// Webp

export const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('build/img'))
}


/* HTML */

export const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

// Styles


export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}


//Copy

export const copy = (done) => {
  gulp.src(["source/fonts/*.{woff, woff2}",
    "source/*.{ico,png, svg}",
    "source/site.webmanifest",
    "source/img/**/*.{png,jpg,svg}"
  ], {base: "source"

  })
  .pipe(gulp.dest("build"))
  done();
}

//Clean

export const clean = () => {
  return deleteAsync("build");
}




//Scripts

export const scripts = () => {
  return gulp.src("source/**/*.js")
  .pipe(terser())
  .pipe(gulp.dest('build/'))
}





// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

//Build


export const build = gulp.series(
  clean,
  copy,
  gulp.parallel(
    styles,
    html,
    scripts,
    createWebp
  ),
);




// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('soucre/less/**/*.js', gulp.series(scripts));
  gulp.watch('soucre/js/*.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, reload));
}


export default gulp.series(
  server, watcher
);




