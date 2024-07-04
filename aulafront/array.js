// ARRAY / LISTAS / COLLECTIONS / VETORES

//let listaFrutas = ["Maçã", "Uva", "Laranja", "melão", "Pera", "Manga", "Banana"];

//console.log(listaFrutas) // Mostra todos os nomes

//console.log(listaFrutas[0]) // Mostra o primeiro nome começndo de 0

/*for (let contador = 0; contador < listaFrutas.length; contador++) {
 {
   
  console.log(listaFrutas[contador]);

 }
}*/


var prompt = require('prompt-sync')();

let idade = prompt('Digite sua idade: ');

if (idade >= 18) {
 console.log("Você é maior de idade");
 console.log("Você pode dirigir");
} else {
 console.log("Você não é maior de idade");
 console.log("Você não pode dirigir");
}