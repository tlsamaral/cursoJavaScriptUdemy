function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
        }
        else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando..', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        v => consol.log(v), 
        err => console.log(`Erro Esp: ${err}`) //tratamento de erro especifico!,
    )
    .catch(err => console.log(`erro: ${err}`))
    .then(()=> console.log("Fim!"))