Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <=fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    }
    else if(nota.entre(7,8.9)){
        console.log('aprovado')
    }
    else if(nota.entre(4,6.9)){
        console.log('recuperação')
    }
    else if(nota.entre(0,3.9)){
        console.log('Reprovado')
    }
    else{
        console.log('Nota invalida')
    }
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.8)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(11)