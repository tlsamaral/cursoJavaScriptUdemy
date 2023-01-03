function rend({min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)   

}
console.log(rend({}))