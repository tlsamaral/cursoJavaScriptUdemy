function criarProduto(nome,preco){
     const desconto = preco * 0.2
    return {
        nomeProduto: nome,
        preco: preco - desconto
    }
z}

console.log(criarProduto('bolacha',30.2))