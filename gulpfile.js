var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js', 'cname']);
gulp.task('all', ['html', 'css', 'js', 'cname', 'images', 'files', 'watch']);

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

gulp.task('images', function () {
    return gulp.src('./images/*')
        .pipe(gulp.dest('./public/images/'));
});

gulp.task('files', function () {
    return gulp.src('./files/*')
        .pipe(gulp.dest('./public/files/'));
});

gulp.task('watch', function () {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./scss/*.scss', ['css']);
    gulp.watch('./js/*.js', ['js']);
});
