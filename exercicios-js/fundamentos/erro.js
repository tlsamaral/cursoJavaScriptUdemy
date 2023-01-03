//tratamento de erros
//Resumo: o codigo abaixo é um algoritmo de tratamento de erro aprendemos metodos novos para isto, como por exemplo o try que significa tentar e é utilizado quando ja se suspeita que teremos um erro logo em seguida temos o catch e seu parametro que capita o erro e manda para um função através de seu parameto, catch tambem pode ser considerado para tratamentos de erros e dentro da funcao temos o throw que é o retorno do erro. E logo em seguida temos o finally que executa o codigo tendo o erro ou nao.
function tratarErroELancar(erro){
    // throw new Error('Estamos trabalhando neste erro')
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
    //esta é uma forma que podemos retornar utilizando um objeto 
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('Final')
    }
}
const obj = {name: 'Talles'}
imprimirNomeGritado(obj)