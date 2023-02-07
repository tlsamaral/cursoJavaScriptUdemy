//ES8: Object.value/ Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))//Apresenta apenas os valores em um array

console.log(Object.entries(obj))//Apresenta uma matriz com chave e valores

//Melhorias na Notacao literal
const nome = 'Cacal'
const pessoa = {
    nome, 
    ola(){
        return 'Ola'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'au au'
    }
}

console.log(new Cachorro().falar())