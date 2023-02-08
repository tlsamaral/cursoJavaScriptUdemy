function esperarPor(tempo = 2000){
    return new Promise(function (resolve){
        setTimeout(() => {
            console.log('Executando..')
            resolve('')
        }, tempo);
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)