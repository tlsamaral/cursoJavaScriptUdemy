const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice, array){
    console.log(`${indice + 1}) ${nome}`)
})
//Funcao callback que passamos para o array tem tres parametros: 1- nome 2-indice , 3-array
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)