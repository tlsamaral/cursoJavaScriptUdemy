function rend([min = 0, max= 100]){
    if(min > max)
    [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rend([50,40]))
console.log(rend([993]))
