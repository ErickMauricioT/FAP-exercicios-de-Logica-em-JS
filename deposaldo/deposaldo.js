const prompt = require('prompt-sync')();

// variável de saldo
let saldo = 0; // Saldo inicial

// Função para realizar o depósito
function realizarDeposito() {
    console.log('\n======== Depósito ========');
    console.log('');
    console.log('');
    console.log('Por favor, indique o valor a ser depositado (ex.: 500.00)');

    let valorDeposito = parseFloat(prompt('Valor do depósito: '));

    // Loop enquanto o valor do depósito for menor que R$ 100
    while (valorDeposito < 100) {
        console.log(
            '\nDepósito mínimo é de R$ 100.00. Por favor, informe um valor válido.\n',
        );

        valorDeposito = parseFloat(prompt('Valor do depósito: '));
    }

    // Adicionando o valor depositado ao saldo
    saldo = saldo + valorDeposito;
    console.log(`\nDepósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.\n`,);

    console.log(`O saldo total em sua conta é R$ ${saldo.toFixed(2)}\n`);
}

realizarDeposito();