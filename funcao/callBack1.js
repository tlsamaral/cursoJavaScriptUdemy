//call back é passar uma funcao que ira ser chamada quando um evento acontecer, o evento nesse caso é cada item corrido no array.
const fabricantes = ["Mercedes","Audi", "BMW"]

function imprimir(nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //funcao call back funcao dentro de fabricantes por ser array, o for each passa o nome e o indice para dentro da funcao, para cada elemento dentro do array ele chama de volta a funcao passando os parametros

fabricantes.forEach(fabricante => console.log(fabricante)) //dessa maneira com apenas um parametro será atribuido o valor 