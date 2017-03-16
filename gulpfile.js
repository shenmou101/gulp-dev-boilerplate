var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('validate-eslint',function(){

    return gulp.src(['src/js/**/*.js']) //指定的校验路径

        .pipe(eslint({configFle:"conf/.eslintrc"})) //使用你的eslint校验文件

        .pipe(eslint.format())

});
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
