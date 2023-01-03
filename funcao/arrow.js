//funcoes arrows são anonimas entao necessitam se armazenadas em uma variavel ou constante 
//Na funcao arow o this nao muda
let dobro = function(a){
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a //tipo de funcao para quando temos um unico parametro e unica linha de codigo
let ola = function(){
    return 'ola'
}
ola = () => 'Ola'

ola = _ => 'Ola' //funcao que tem sim parametro mas é ignorado