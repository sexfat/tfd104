const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

// 第一個任務 console 
function tasks(cb){
  console.log('gulp 第一個任務');
  cb();
}

exports.do = tasks;

//第二個任務 搬家
function move(){
   return src('style.css').pipe(dest('css/'));
}

exports.copy = move; 


// sass編譯
const sass = require('gulp-sass')(require('sass'));
function sassstyle(){
   return src('src/sass/*.scss') // 來源路徑
   .pipe(sass().on('error', sass.logError))
   .pipe(dest('dist/css/')) // 目的地路徑
}

exports.style =sassstyle;

// html template

const fileinclude = require('gulp-file-include');

function html(){
   return src('src/*.html') // 來源路徑
   .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
     }))
   .pipe(dest('./dist')); // 目的地路徑
}

exports.template = html;

// js uglify

const uglify = require('gulp-uglify');

function jsmini(){
   return src('src/js/*.js')
   .pipe(uglify())
   .pipe(dest('dist/js'))
}

exports.js =jsmini;



// watch
function watchall(){
   watch(['html/*.html' , 'html/**/*.html'] , html);
   watch(['sass/*.scss' , 'sass/**/*.scss'] , sassstyle)
}

exports.w = watchall;