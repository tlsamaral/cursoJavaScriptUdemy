const prod1 = {}

prod1.nome = 'Celular ultra mega'
prod1.preco = 4990.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 78.90,
    obj: {
        blabla: 1,
            obj: {
                blabla: 2
            }
    }
}
console.log(prod2)