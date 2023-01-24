const carrinho = [
    '{"nome": "Borracha", "preco": "3.45"}',
    '{"nome": "Caderno", "preco": "13.9"}',
    '{"nome": "Kit de Lapis", "preco": "41.22"}',
    '{"nome": "caneta", "preco": "7.5"}'
]
const novoArray = carrinho.map(JSON.parse).map((e)=>{return Number(e.preco)}) 
console.log(novoArray)
