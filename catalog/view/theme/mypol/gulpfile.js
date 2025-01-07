const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Пути к файлам
const paths = {
    styles: {
        src: 'catalog/view/theme/mypol/scss/**/*.scss', // SCSS файлы
        dest: 'catalog/view/theme/mypol/stylesheet/',   // Папка для CSS
    },
};

// Компиляция SCSS в CSS
function styles() {
    return gulp
        .src(paths.styles.src) // Источник
        .pipe(sass().on('error', sass.logError)) // Компиляция SCSS
        .pipe(gulp.dest(paths.styles.dest)); // Вывод CSS
}

// Наблюдение за изменениями
function watch() {
    gulp.watch(paths.styles.src, styles);
}

// Задачи по умолчанию
exports.styles = styles;
exports.watch = watch;
exports.default = watch;
