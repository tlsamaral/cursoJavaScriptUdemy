const fs = require('fs')//da um require atras do File system
const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')//passa primeiro o caminho e depois o incode 'utf-8', codigo do arquivo.json foi escrito em utf-8 isso para que leia de forma correta o que foi escrito no arquivo

console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})//caminho incode e por ultimo uma callback para depois que tiver lido o arquivo tratar os dados
 

//ler json de uma outra maneira
const config = require('./arquivo.json')
console.log(config.db)//foi executado antes do console.log anterior por conta da callback assincrona

fs.readdir(__dirname, (err,arq)=>{
    console.log('Conteudo da pasta...')
    console.log(arq)
})
