const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//retorna as chaves do objeto
console.log(Object.values(pessoa))//retorna apenas os valores
console.log(Object.entries(pessoa)) // retorna dados em fomato de array


Object.entries(pessoa).forEach(([chave, valor])=>{console.log(`${chave}: ${valor}`)})// faz um foreach com todos os elementos do objeto usando como parametro o formato de array para retornar os valores chamados.

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // aqui damos propriedades ao objeto dizendo que pode ser enumerado ou aparecer em uma chamada
    writable: false, // dizemos que o valor nao poderá ser alterado
    value: '01/01/2017' // valor
})
pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento) 
console.log(Object.keys(pessoa))


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)// unifica os objetos em um só, primeiro parametro é o objeto de destino.
console.log(obj)
