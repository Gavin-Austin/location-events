'use strict';

//Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

////////////////
// - SCSS / CSS
////////////////

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

//Compile SCSS
function style() {
    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min'}))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
}

exports.default = style;