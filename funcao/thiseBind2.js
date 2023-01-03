function Pessoa(){
    this.idade = 0
    //setInteval funcao destinada a ralizar outra funcao em um determinado tempo dado em milisegundos
    setInterval(function(){ 
        this.idade++
        console.log(this.idade)
    }.bind(Pessoa),1000)
}
new Pessoa

//outra maneira de realizar é armazenando o this em uma constante

function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){ 
        self.idade++
        console.log(self.idade)
    },1000)
}
new Pessoa