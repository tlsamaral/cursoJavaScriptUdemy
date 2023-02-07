console.log(this === globalThis)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)//fora de uma funcao true

function logThis(){
    console.log('Dentro de uma funcao..')
    console.log(this === exports)// dentro de uma funcao false
}

logThis()