// Calculadora IMC
// Formula: peso / (altura * altura)


// Variaveis

// SEM FUNÇÃO
//let peso = 78
//let altura = 1.66
//let imc = peso / (altura * altura)

//console.log( `O seu IMC é: ${imc.toFixed(2)} `)

// COM FUNÇÃO


//Coloca as VAR no ()
/*function calcularIMC(peso, altura) {
 let imc = peso / (altura * altura)
 return imc;
}
calcularIMC(78, 1.66)
console.log(`O seu IMC é: ${calcularIMC(78, 1.66).toFixed(2)} `)*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*var prompt = require('prompt');


prompt.start();


prompt.get(['username', 'email'], function (err, result) {

 console.log('Command-line input received:');
 console.log('  username: ' + result.username);
 console.log('  email: ' + result.email);
});*/

let idade = 13;

let renovar = true;

if (idade >= 18 && renovar == false) {

 console.log("Você é maior de idade")
 console.log("Você pode dirigir");

} else if (idade >= 18 && renovar == true) {
 
 console.log("Renove a habilitação");

} else {

 console.log("Você não é maior de idade");
 console.log("Você não pode dirigir");
}