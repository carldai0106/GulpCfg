"use strict";

var gulp = require("gulp"),
    //js 语法，规范检测
    eslint = require("gulp-eslint"),
    //less 编译
    less = require("gulp-less"),
    //根据设置浏览器版本自动处理浏览器前缀
    autoprefixer = require("gulp-autoprefixer"),
    //对css压缩
    minifyCss = require("gulp-minify-css"),
    //文件合并
    concat = require("gulp-concat"),
    //notify的功能主要有两点，显示报错信息和报错后不终止当前gulp任务
    notify = require("gulp-notify"),
    //清理文件，目录
    clean = require("gulp-clean"),
    //重命名文件
    rename = require("gulp-rename"),
    //JS压缩
    uglify = require("gulp-uglify"),
    //html文件压缩
    htmlmin = require("gulp-htmlmin"),
    //构建本地服务器
    connect = require('gulp-connect'),
    //自动刷新
    livereload = require("gulp-livereload");


gulp.task("clean", function() {
    return gulp.src(["dist/", "release/"], {
        read: false
    }).pipe(clean());
});

gulp.task("styles", function() {
    return gulp.src("src/less/**/*.less")
        .pipe(less())
        .pipe(autoprefixer({ 
            browsers : ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(concat("all.css"))
        .pipe(gulp.dest("release/css"))
        .pipe(minifyCss())
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest("release/css"))
        .pipe(connect.reload());
});

gulp.task("scripts", function() {
    return gulp.src("src/js/**/*.js")
        .pipe(eslint())       
        // .pipe(eslint.result(function(result) {
        //     // Called for each ESLint result. 
        //     console.log('ESLint result: ' + result.filePath);
        //     console.log('# Messages: ' + result.messages.length);
        //     console.log('# Warnings: ' + result.warningCount);
        //     console.log('# Errors: ' + result.errorCount);
        // }))
        .pipe(eslint.format())
        .pipe(gulp.dest("dist/js"))
        .pipe(uglify())
        .pipe(gulp.dest("release/js"))
        .pipe(connect.reload());
});

gulp.task("html", function() {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({
            //collapseWhitespace: true,//压缩HTML
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        }))
        .pipe(gulp.dest("release"))
        .pipe(connect.reload());
});

gulp.task("otherscripts", function() {
    return gulp.src(["src/**/*.js", "!src/js/**/*.js"])
        .pipe(eslint())       
        .pipe(eslint.format())
        .pipe(gulp.dest("release"))
        .pipe(connect.reload());
});

gulp.task("connect", function() {
    connect.server({
        root: ['release'],
        port: 8300,
        livereload: true
    });
});

//注意：在最开始执行watch任务的时候，最好是先执行一个clean任务，否则有可能异常。
gulp.task("watch", ['clean', 'styles', 'scripts', 'html', 'otherscripts', 'connect'], function() {

    gulp.watch("src/less/**/*.less", ['styles']);
    gulp.watch("src/js/**/*.js", ['scripts']);

    gulp.watch(["src/*.html", "src/**/*.html"], ['html']);

    gulp.watch(["src/**/*.js", "!src/js/**/*.js"], ['otherscripts']);  

});