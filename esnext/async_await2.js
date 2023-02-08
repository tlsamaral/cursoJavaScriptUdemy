function gerarNumerosEntre(min, max, numsProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if (numsProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        }
        else {
            resolve(aleatorio)
        }
    })
}
async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    }
    catch(e){
        if(tentativas > 10){
            throw "Que merda em!!"
        }
        else{
            gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)