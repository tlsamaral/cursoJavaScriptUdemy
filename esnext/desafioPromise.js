const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
console.log(__dirname)

function exibirCont(_, cont){
    console.log(cont)
}

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })

        console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(console.log)
