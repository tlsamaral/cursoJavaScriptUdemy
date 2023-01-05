function Carro (velocidadeMax = 200, delta = 5){
    //atribui privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(ferrari)