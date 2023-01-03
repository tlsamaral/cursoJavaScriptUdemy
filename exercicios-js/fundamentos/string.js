const escola = 'Cod3r'

console.log(escola.charAt(1))
console.log(escola.charCodeAt(2))//mostra o valor na tabela ask
console.log(escola.indexOf('o'))// procura em qual indice esta a letra ou o numero

console.log(escola.substring(3)) //começa a escrever a partir deste indice
console.log(escola.substring(0, 3))// vai do indice 0 ate 0 indice 3 sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!"))// concatenar

console.log(escola.replace(4, 'e'))// para trocar valores (o que quer trocar, o que deseja colocar no lugar) de numeros para letras.
console.log('Talles,Amaral,Rafael'.split(','))// transformando em um array e passando como parametro o que vai ser 'divisor' dos nossos indices
