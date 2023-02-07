const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

    const filtrarChineses = x => x.pais === 'China'
    const mulheres = x => x.genero === 'F'
    const menorSalario = (func, funcAtual) => { 
        return func.salario < funcAtual.salario ? func : funcAtual
    }

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(filtrarChineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})
