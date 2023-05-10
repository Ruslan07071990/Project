import imagemin from 'gulp-imagemin';
import gulp from 'gulp';
// import minify from'gulp-minify';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat'
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
// import GulpClient from'gulp';
import clean from 'gulp-clean';
import bs from 'browser-sync';
import fileinclude from "gulp-file-include";
const browserSync = bs.create();
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const scss = () => {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
  };



const html =()=>{
    return gulp.src('./index.html')
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
}

const imgMin = () =>{
    return gulp.src('./src/images/**')
    .pipe(imagemin()).pipe(gulp.dest('dist/images'))
}


const js = () =>{
    return gulp.src('./src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'))
}
const cleanDist =() =>{
    return gulp.src('./dist', {read: false})
    .pipe(clean());
}
const css = ()=>{
    return gulp.src('./dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css')) 
} 

// const server = () => {
//     browserSync.init({
//       server: {
//         baseDir: `./dist`,
//       },
//       notify: false,
//       port: 3000,
//     });
//   };
  
//   const watchers = () => {
//     gulp.watch("./src/**/*.scss", scss).on('change', browserSync.reload);
//     gulp.watch("./src/**/*.html", html).on('change', browserSync.reload);
//     gulp.watch("./src/**/*.js", js).on('change', browserSync.reload);
//     gulp.watch("./src/img/**/*.+(png|jpg|jpeg|gif|svg)", imgMin).on('change', browserSync.reload);
//   };

const dev =()=>{
    
        browserSync.init({
            server: {
                baseDir: "./dist"
            }
        });
    gulp.watch('./src/**/*',gulp.series(cleanDist,gulp.parallel(html,imgMin, js,css, scss),(next) => {
        browserSync.reload();
    next()
    }))
    
}
// watch("./src/**/*.scss", styles);
//   watch("./src/**/*.html", html);
//   watch("./src/**/*.js", scripts);
//   watch("./src/img/**/*.+(png|jpg|jpeg|gif|svg)", images);
// function buildStyles() {
//     return gulp.src('./src/scss/**/.scss')
//       .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//       .pipe(gulp.dest('./css'));
//   };

gulp.task('img',imgMin)
gulp.task('html',html);
gulp.task('js',js);
gulp.task('css',css)
gulp.task('scss',scss)
gulp.task('clean',cleanDist)
gulp.task('html',html);
// gulp.task('newDev', gulp.series(gulp.parallel(watchers,server)))
gulp.task('build',gulp.series(cleanDist,gulp.parallel(html, js,imgMin,scss, css, )))
gulp.task('dev',gulp.series('build',dev))












