const { reject } = require("lodash");

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}