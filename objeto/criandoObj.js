//Maneiras de criar objetos com javascript

//Usando notação literal
const obj1 = {}
console.log(obj1)

//Obejto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())

//funcao Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao',7980,4)
console.log(f1.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna objeto

const fromJSON = JSON.parse('{"info": "Sou um objeto"}')
console.log(fromJSON.info)