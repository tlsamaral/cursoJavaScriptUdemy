// novo recurso do ES2015

const pessoa = {
    nome: 'Talles',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 100
    }
}
// desestrutucacao
const {nome, idade} = pessoa // nessa linha de código dizemos para retirar nome e idade de dentro da variavel pessoa, fazendo assim nossa desestruturação.
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // nessa linha estamos extraindo valores nome e idade e colocando dentro das variaveis que criamos n e i respectivamete
console.log(n,i)
const {sobrenome, bemHumorado = true} = pessoa // aqui tentamos tirar valores que nao existem, mas no caso do bemHumorado ja passamos um valor padrão a ele.

const {endereco: {logradouro, numero}} = pessoa // por termos outro objeto dentro de pessoa conseguimos desta forma retirarmos as variaveis dentro deles ou seus valores.
