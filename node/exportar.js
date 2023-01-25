console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3 

exports = null
console.log(module.exports)
exports = {
    nome: 'Teste'
}//Maneira incorreta de fazer
module.exports = {
    publico: true
}//Maneira correta de fazer