const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react)//maneira errada
console.log(tecnologias.get('react').framework)//maneira correta

const chavesVariadas = new Map([
    [function (){}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)