//clousure é o escopo criado quando a funcao é declarada 
//Esse escopo permite a funcao acessar e manipular variaveis externas á funcao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

