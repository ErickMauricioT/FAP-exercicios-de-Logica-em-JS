//* 1 - Implementar um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares

// let cotacaoDolar = Number(prompt("Informe a cotação do dólar:"));

// let valorEmReal = Number(prompt("Informe o valor em reais que você deseja converter:"));

// let valorConvertido = valorEmReal / cotacaoDolar;


// let opcao = Number(prompt
//  ("Escolha a opção de conversão:\n1 - REAL -> DOLAR\n2 - Dolar -> REAL"))

// if (opcao == 1) {
//  alert(`O valor convertido é: ${valorConvertido.toFixed(2)} reais`)
// } else if (opcao == 2) {
//  alert(`O valor convertido é: ${valorConvertido.toFixed(2)} dólares`)
// } else {
//  alert("Opção inválida!")
// }

// alert(`O valor convertido é: ${valorConvertido.toFixed(2)} dólares`)



//** 2 - Faça um programa em que leia um número inteiro informado pelo usuário e diga se esse número é par ou ímpar.

// let impaPar = Number(prompt("Digite o primeiro numero:"))

// if (impaPar % 2 != 0) {
//  alert("O numero é impar.");

// }
// else {
//  alert("O numero é par.");
// }



//* 3 - Faça um programa que leia dois números e informe qual é o maior.

// let n1 = Number(prompt("Digite um número:"));
// let n2 = Number(prompt("Digite outro número:"));

// if (n1 > n2) {
//  alert(`${n1} é menor que ${n2}`);

// } else if (n1 < n2) {
//  alert(`${n2} é maior que ${n1}`);
// }



//* 4 - Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado

// let nota1 = Number(prompt("Digite a nota da primeira prova:"));
// let nota2 = Number(prompt("Digite a nota da segunda prova:"));
// let media = (nota1 + nota2) / 2;

// if (nota1 >= 6) {
//  alert(`O aluno foi aprovado na primeira prova com a nota ${nota1}.`);
// } else {
//  alert(`O aluno foi reprovado na primeira prova com a nota ${nota1}.`);
// }


// if (nota2 >= 6) {
//  alert(`O aluno foi aprovado na segunda prova com a nota ${nota2}.`);
// } else {
//  alert(`O aluno foi reprovado na segunda prova com a nota ${nota2}.`);
// }


// if (media >= 6) {
//  alert(`O aluno foi aprovado com a média ${media}.`);
// } else {
//  alert(`O aluno foi reprovado com a média ${media}.`);
// }


//* 5 - Um cinema oferece aos seus clientes dois tipos de ingressos


// let tipoIngresso = Number(prompt("Digite o tipo de ingresso que deseja:\n1 - VIP\n2 - Standard"));
// let desejaCombo = Number(prompt("Deseja o combo de pipoca e refrigerante?\n1 - Sim\n2 - Não"));

// let valor;

// if (tipoIngresso === 1) {
//  if (desejaCombo === 1) {
//  } else {
//   valor = 80;
//  }
// } else if (tipoIngresso === 2) {
//  if (desejaCombo === 1) {
//   valor = 70;
//  } else {
//   valor = 40;
//  }
// } else {
//  alert("Opção de ingresso inválida.");
// }


// if (valor) {
//  alert(`Valor: ${valor} reais`);
// }



//* 8 - Elabore uma calculadora simples

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");

function operacao(numero1, numero2, operacao) {

 switch (operacao) {

  case 1:
   alert(`O resultado da soma é: ${numero1 + numero2}`);
   break;
  case 2:
   alert(`O resultado da subtração é: ${numero1 - numero2}`);
   break;
  case 3:
   alert(`O resultado da multiplicação é: ${numero1 * numero2}`);
   break;
  case 4:
   if (numero2 !== 0) {
    alert(`O resultado da divisão é: ${numero1 / numero2}`);
   } else {
    alert("Erro: divisão por zero.");
   }
   break;
  default:
   alert("Operação inválida. Por favor, escolha uma opção válida.");
   break;

 }
}

// operacao = parseInt(operacao);


// if (operacao === 1) {
//  alert(`O resultado da soma é: ${numero1 + numero2}`);
// } else if (operacao === 2) {
//  alert(`O resultado da subtração é: ${numero1 - numero2}`);
// } else if (operacao === 3) {
//  alert(`O resultado da multiplicação é: ${numero1 * numero2}`);
// } else if (operacao === 4) {
//  if (numero2 !== 0) {
//   alert(`O resultado da divisão é: ${numero1 / numero2}`);
//  } else {
//   alert("Erro: divisão por zero.");
//  }
// } else {
//  alert("Operação inválida. Por favor, escolha uma opção válida.");
// }