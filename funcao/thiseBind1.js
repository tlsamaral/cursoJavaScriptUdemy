//this pode variar de acordo com a função chamada
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) //nesse caso o this se refere ao escopo em que ele está  (saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // aqui podemos ver o retorno de undefined pois o objeto dono da função mudou 
//conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind voce passa um objeto que se refere a funcao this, passando pessoa como argunmento significa que o this vai se referir a pessoa 'this = pessoa'.