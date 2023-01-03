console.log(Math.ceil(6.1))

const obj1 = {}
// maneiras diferentes de acessar um valor
obj1.nome = 'bola'
obj1['nome'] = 'bola2'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2) // apartir da atribuição acima consoguimos mandar valores através de uma função para dentro de uma variavel como um objeto.
console.log(obj3.nome)