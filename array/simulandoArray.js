const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
Object.defineProperty(quaseArray, 'toString',{
    value: function(){return Object.value(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael','Ana','Bia']
console.log(meuArray.toString())