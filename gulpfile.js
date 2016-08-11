var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js', 'cname']);

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('css', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('cname', function () {
    return gulp.src('./CNAME')
        .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./scss/*.scss', ['css']);
    gulp.watch('./js/*.js', ['js']);
});
