const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}
//Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Talles',
    idade: 20,
    peso: 66,
    endereco: {
        logradouro: 'Rua 200',
        numero: 1234
    }
}
console.log(saudacao)
console.log(exec())// vammos a diferença do termo acima pois nossa constante está dentro de um escopo de uma função
console.log(cliente)