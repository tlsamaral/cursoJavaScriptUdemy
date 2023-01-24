Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0;i<this.length;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": "3.45"}',
    '{"nome": "Caderno", "preco": "13.9"}',
    '{"nome": "Kit de Lapis", "preco": "41.22"}',
    '{"nome": "caneta", "preco": "7.5"}'
]
const novoArray = carrinho.map2(JSON.parse).map2((e)=>{return Number(e.preco)}) 
console.log(novoArray)
