function MeuObjeto(){}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // nos mostra que os dois objetos recebem o mesmo prototype por herança
console.log(MeuObjeto.prototype  === obj1.__proto__) //Compara o prototype da funcao e o obtido pelo objeto por herança e retorna true comprovando  a herança obtida atraves da funcao

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! meu nome ${this.nome}`)
}

obj1.falar() //Mais uma vez mostrando que podemos chamar funcoes herdadas 