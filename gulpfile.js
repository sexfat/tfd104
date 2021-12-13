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
   return src('sass/style.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(dest('css/'))
}

exports.style =sassstyle;

// html template

const fileinclude = require('gulp-file-include');

function html(){
   return src('html/*.html')
   .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
     }))
   .pipe(dest('./'));
}

exports.template = html;

// watch
function watchall(){
   watch(['html/*.html' , 'html/**/*.html'] , html);
   watch(['sass/*.scss' , 'sass/**/*.scss'] , sassstyle)
}

exports.w = watchall;