{
    {
        {
            {
                var sera = 'Sera'
            }
        }
    }
}
console.log(sera)//ira imprimir a variavel mesmo que ela esteja dentro de escopos

function teste(){
    var local = 123
    console.log(teste)
}

console.log(teste)//aqui nao funciona pois a variavel esta dentro do escopo de uma function