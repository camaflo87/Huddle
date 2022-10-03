const {src,dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    src('src/scss/**/*.scss') //Identifica el archivo sass
    .pipe(plumber())
    .pipe(sass()) //Compila archivo sass
    .pipe(dest('build/css'))//Almacena en disco duro

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;

