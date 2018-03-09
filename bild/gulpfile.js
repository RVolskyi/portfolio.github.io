var gulp = require('gulp'), // подключаем gulp
	 sass = require('gulp-sass'); // подключаем sass
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function() { // создаем таск "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) //берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //Преобразуем sass в CSS
		.pipe(gulp.dest('css')) //Выгружаем результат в папку css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browser Sync
		server: { // Определяем параметры сервера
			baseDir: '../bild' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
	gulp.watch('sass/**/*.sass', ['sass']); //наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);
