function esperarPor(tempo = 2000){
    return new Promise(function (resolve){
        setTimeout(() => {resolve('')}, tempo);
    })
}
// esperarPor(2000)
//     .then(esperarPor)
//     .then(_ => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(_ => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(_ => console.log('Executando promise 3...'))

async function executar(){
    await esperarPor(1500)
    console.log('Async/await 1...')

    await esperarPor(1500)
    console.log('Async/await 2...')

    await esperarPor(1500)
    console.log('Async/await 3...')
}

executar()