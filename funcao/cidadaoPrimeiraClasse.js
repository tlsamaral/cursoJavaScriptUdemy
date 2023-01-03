//função em Js é First-Class Object (Citizens)
//Higher-Order function

//criar de forma literal
function fun1(){}
//Armazena em uma variavel
const fun2 = function (){}
 // armazenar em um array
 const array = [function(a,b){return a + b},fun1,fun2]
 console.log(array[0](2,3))

 //Armazena o atributo em um objeto
 const obj = {}
 obj.falar = function (){return 'Ola mundo'}
console.log(obj.falar())

//Passar funcao como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando')})

//Uma função pode retornar;conter um funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(3)