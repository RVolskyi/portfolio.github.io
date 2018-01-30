var gulp = require('gulp'), // подключаем gulp
	 sass = require('gulp-sass'); // подключаем sass

gulp.task('sass', function() { // создаем таск "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) //берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //Преобразуем sass в CSS
		.pipe(gulp.dest('css')) //Выгружаем результат в папку css
});

gulp.task('watch', function () {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); //наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);