const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //exclui o ultimo indice do array

pilotos.push('Verstappen') //Adiciona mais um item ao array
pilotos.shift()//Remove o elemento da primeira posição

pilotos.unshift('Hamilton')//Adiciona na primeira posição

//splice pode adicionar ou remover elementos
pilotos.splice(2,0,'Bottas','Massa')//Qual indicice se inicia, quantos irá remover a partir do indice inicial, Quais elementos irá adicionar

pilotos.splice(3,1)

const algunsPilotos1 = pilotos.slice(2) //Novo array a partir do indice 2

const algunsPilotos2 = pilotos.slice(1,4)//pega os valores do indice 1 ao 4 e armazena em outro array