const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 2', function(){
    console.log("Executando tarefa 1!", new Date().getSeconds())
})//Execute qualquer dia do mes as 12 horas de 5 em 5 segundos

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelamento Tarefa1')
}, 20000)

//setImmediate - setTimeout com valor zerado
//setInterval - executar uma funcao a cada intervalo

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando tarefa 2", new Date().getSeconds())
})