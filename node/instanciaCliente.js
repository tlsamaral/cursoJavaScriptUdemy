const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)//r: 3 - nos comprova que o node armazena o cache mesmo chamando outro funcao referenciando a mesma instancia

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)//r: 1, 3 = podemos comprovar que fazendo uma funcao factory conseguimos fazer com que o node nao retorne a mesma instancia