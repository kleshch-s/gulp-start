'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade');

/* template */
gulp.task('template', function () {
    gulp.src('./src/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
		.pipe(livereload());
});

/* style */
gulp.task('style', function () {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./style'))
		.pipe(livereload());
});

/* default */
gulp.task('default', ['template', 'style']);

/* watch */
gulp.task('watch', ['default'], function () {
	livereload.listen();
    gulp.watch(['./src/**/*.*', './src/**/**/*.*'], ['default'])
});