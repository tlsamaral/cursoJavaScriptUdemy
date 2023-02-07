//operador ... rest (justar)/spread(espalhar)
//usar rest com parametro de funcao 

//spread com objeto 
const funcionario = {nome: 'Maria', salario: 1239.33}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array 
const grupoA = [ 'Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
