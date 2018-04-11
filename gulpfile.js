// git clone 網址 存檔的資料夾
// npm  install 

var gulp = require('gulp')
    // var sass = require('gulp-sass')
var browserSync = require('browser-sync')
var gulpImagemin = require('gulp-imagemin')

// 設定server的內容
// gulp.task('server', ['scss'], function() {
//     // 執行server
//     browserSync.init({
//             server: {
//                 baseDir: './'
//             }
//         })
//         // 監看
//     gulp.watch('./*.html', browserSync.reload)
//     gulp.watch('./style/sass/*.scss', ['scss'])
//     gulp.watch('./style/css/*.css', ['css'])

// })

gulp.task('css', function() {
    return gulp.src('./style/css/*.css')
        // 送出並插入
        .pipe(browserSync.stream())

})

// scss轉換，取道的檔案送給pipe工作，再放到css的資料夾
// gulp.task('scss', function() {
//     return gulp.src('./style/sass/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./style/css'))
// })

gulp.task('image', function() {
    gulp.src('./img/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('images'));
})


// 命名task為dev, 在這之前要先跑server
// gulp.task('dev', ['server'])