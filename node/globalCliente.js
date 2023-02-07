require('./global')//chamando dessa maneira trazemos para esse arquivos tudo aquilo que definimos em global
console.log(minhaApp.saudacao())//chamamos o minhaApp mesmo sendo de outro arquivo

minhaApp.nome = 'Talles' //por darmos um freeze no global impedimos de poder alterar seus valores
console.log(minhaApp.nome)