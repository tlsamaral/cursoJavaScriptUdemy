const gulp = require('gulp')
const series = gulp.series

function copiar(cb){
    console.log('tarefa de copir')
    return cb()
}

module.exports.default = series(copiar)
