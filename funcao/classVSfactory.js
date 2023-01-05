class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Talles')
p1.falar()

const criarpessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome não é ${nome}`)
    }
}

const p2 = criarpessoa('João')
console.log(p2.falar())