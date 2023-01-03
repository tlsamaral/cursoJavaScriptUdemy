//diferente do outro arquivo podemos ver que usando arrow function o this nao muda
function Pessoa (){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa