let valor // nao inicializada

console.log(valor)//undefined

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.58
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
delete produto.preco
// console.log(produto)
