//Arrow function 
const soma = (a,b) => a+b
console.log(soma(2,3))

//Arrow function (this) está associado ao local no qual a funcao foi escrita
const lexico1 =()=> console.log(this === exports)

//parametro default
function log(texto = 'node'){
    console.log(texto)
}
log()
log('Js')

//Operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3,2,3,4))