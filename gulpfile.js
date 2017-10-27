var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS({ keepSpecialComments: 0 }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['scripts', 'styles'], function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
});
