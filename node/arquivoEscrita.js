const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),err=>{
    console.log(err  || "Arquivo salvo!!")
})//primeiro parametro o diretorio atual, segundo o chamninho do arquivo, terceiro o texto que queremos escrever no arquivo e por ultimo uma funcao callback que chega como parametro o erro, caso tenha.