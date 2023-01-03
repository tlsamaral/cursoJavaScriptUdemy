//estrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1 //declarando valores padrões caso nao seja informado na chamada
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(),soma1(3),soma1(0,0,0))

//estrategia 2,3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 // verifica se valor é diferente de undefined se for atribui o valor recebido se não atribui o valor padrão
    b = 1 in arguments ? b : 1 //pega o valor a partir do array de arguments no indice 1 como informado
    c = isNaN(c) ? 1 : c //invoca a funcão para verificar se o valor é um numero, se nao for atribui o valor padrão

    return a + b + c
}

console.log(soma2(),soma2(3),soma2(1,2,3))

//maneira padrão do ES2015

function soma3(a=1,b=1,c=1){//atribui um valor padrão se outro for informado o parametro assume o mesmo
    return a + b + c
}
