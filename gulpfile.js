var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel',function(){
	return gulp.src('src/*.js')
	.pipe(babel())
	.pipe(gulp.dest('build'))
})


//es6
// gulp.task('babel',()=>{

// })

gulp.task('default',["babel"])