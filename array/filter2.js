Array.prototype.filter2 = function(callback){
    const meuArray = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            meuArray.push(this[i])
        }
    }
    return meuArray
}
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]
produtosCaros = produto => produto.preco >= 500
produtosFrageis = produto => produto.fragil

const novosProdutos = produtos.filter2(produtosCaros).filter2(produtosFrageis)

console.log(novosProdutos)