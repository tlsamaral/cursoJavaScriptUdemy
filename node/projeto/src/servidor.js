const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({extended: true}))//funcao que retorna uma funcao middleware que faz um parser bno retorno da funcao, se o padrao da requisicao for url encoded ele transforma em objeto



// app.get('/produtos', (req, res, next)=>{
//     res.send({nome: 'Notebook', preco: 123.45})//Converter para JSON
// })
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//Converter para JSON
})

app.get('/produtos/:id', (req,res,next)=>{res.send(bancoDeDados.getProduto(req.params.id))})

app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.delete('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.i)
    res.send(produto)//JSON
})

app.listen(porta , ()=>{
    console.log(`Servidor executado na porta ${porta}`)
})