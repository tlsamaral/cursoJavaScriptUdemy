//funcao filter como propriamente dita é utilizada para filtrar e abaixo vemos um exemplos de como podemos adicionar um novo array com o filter fazendo uma verificação de maneira facilitada

const notas = [4,5.6,7,6.9,9,10]
let notasBaixas1 = []

//sem call back

for(let i in notas){
    if(notas[i]<7)
        notasBaixas1.push(notas[i])
}
console.log(notasBaixas1)

//com call back

const notasBaixas2 = notas.filter(function(nota){return nota < 7})

console.log(notasBaixas2)

//usando arrow

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)