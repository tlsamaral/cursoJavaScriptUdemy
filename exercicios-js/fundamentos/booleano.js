let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)//descobrindo se um valor é true or false usando a negação

console.log(`
    os verdadeiros...
`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))// o valor atribuido 
console.log(`
    os falsos...
`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))// valor atribuido

console.log('Para finalizar..')
console.log((!!('' || null || 0 || 'ola')))// verifica se existe algum tipo verdadeiro se tiver ele o mostra 

// um caso interessante

let nome = ''
console.log(nome || 'Desconhecido')// atribui um valor padrao quando nao tiver nada atribuido, ele verifica se existe algo dentro de nomem, se nao existir ele atriui
