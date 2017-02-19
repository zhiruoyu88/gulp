var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	watch = require('gulp-watch'),
	htmlmin = require('gulp-htmlmin'),
	browserSync = require('browser-sync');

gulp.task('mincss',function(){
	gulp.src('./src/**/*.css')
		.pipe(concat('build.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css'))
})
gulp.task('minifyjs', function (cb) {
  pump([
      gulp.src('./src/**/*.js'),
      concat('build.js'),
      uglify(),
      gulp.dest('dist/js/')
    ],
    cb
  )
});
gulp.task('minhtml',function(){
	gulp.src('src/*.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist/'))
})
gulp.task('default',['mincss','minifyjs','minhtml'],function(){
	console.log('success')
})
gulp.task('reload',function(){
	browserSync.reload();
})
gulp.task('watch',['browser-sync'],function(){
	var watcher = gulp.watch(['src/*.html','src/**/*.css','src/**/*.js'], ['default','reload']);
	watcher.on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
})
gulp.task('browser-sync', function() {
    browserSync({
        server: "./src/"
    });
});
