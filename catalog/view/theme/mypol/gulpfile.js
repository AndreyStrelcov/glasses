// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// // Пути к файлам
// const paths = {
//     styles: {
//         src: 'catalog/view/theme/mypol/scss/**/*.scss', // SCSS файлы
//         dest: 'catalog/view/theme/mypol/stylesheet/',   // Папка для CSS
//     },
// };

// // Компиляция SCSS в CSS
// function styles() {
//     return gulp
//         .src(paths.styles.src)
//         .pipe(sass().on('error', sass.logError)) // Лог ошибок Sass
//         .pipe(gulp.dest(paths.styles.dest)) // Вывод CSS
//         .on('end', () => console.log('SCSS компиляция завершена!')); // Лог успешной компиляции
// }

// // Наблюдение за изменениями
// function watch() {
//     gulp.watch(paths.styles.src, styles);
// }

// // Задачи по умолчанию
// exports.styles = styles;
// exports.watch = watch;
// exports.default = watch;




const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scss: './scss/**/*.scss', // Все SCSS-файлы
    css: './stylesheet/',     // Папка назначения для CSS
};

// Задача для компиляции SCSS
function styles() {
    return gulp.src('./scss/main.scss') // Основной SCSS-файл
        .pipe(sourcemaps.init())        // Инициализация sourcemaps
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Компиляция SCSS
        .pipe(sourcemaps.write('./'))  // Запись sourcemaps
        .pipe(gulp.dest(paths.css));   // Сохранение в папку назначения
}

// Наблюдение за изменениями
function watch() {
    gulp.watch(paths.scss, styles);
}

// Задачи по умолчанию
exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, watch);



