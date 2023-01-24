const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]
produtosCaros = produto => produto.preco >= 500
produtosFrageis = produto => produto.fragil

const caros = produtos.filter(produtosCaros)
const frageis = produtos.filter(produtosFrageis)

console.log(caros && frageis)