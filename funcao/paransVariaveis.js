function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i] //maneira de recuperar parametros informados na chamada sem que a funcao esteja dita que irá receber parametros.
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4,2))
console.log(soma(2,1,'Teste'))