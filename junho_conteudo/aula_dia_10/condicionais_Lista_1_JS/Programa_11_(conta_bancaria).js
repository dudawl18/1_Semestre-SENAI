/*Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. 
Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. 
Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. 
Criar uma variável com um valor que represente o saldo inicial.*/

 let usuarioConta
 let operacao
 let valorDeposito
 let valorSaque
 let saldoInicial = 1000
 let saldoAtual

 alert('Bem vinda(o)')
 usuarioConta = parseInt(prompt('Digite o número da sua conta bancária: '))

 operacao = parseInt(prompt('Que tipo de operação deseja realizar?\n\nDigite:\n1) Saldo\n2) Depósito\n3) Saque'))

 if(operacao == 1){

    alert('Seu saldo atual é de: R$' + saldoAtual)

 }else if(operacao == 2){

  valorDeposito = parseFloat(prompt('Digite o valor a ser depositado: '))

  saldoAtual = valorDeposito + saldoInicial

  alert('Seu saldo atual agora é de: R$' + saldoAtual)

 }else if(operacao == 3){

    valorSaque = parseFloat(prompt('Digite o valor a ser sacado: '))

    if(valorSaque > saldoInicial){

        alert('O saque não pode ser realizado pois não há saldo suficiente')

    }else{

        saldoAtual = saldoInicial - valorSaque

        alert('Seu saldo atual agora é de: R$' + saldoAtual)   
    }

 }else{

 alert('Digite uma opção válida!')

 }