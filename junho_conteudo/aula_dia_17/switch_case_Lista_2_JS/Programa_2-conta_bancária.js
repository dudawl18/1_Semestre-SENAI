/*2) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. 
Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela.
 Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente.
  Criar uma variável com um valor que represente o saldo inicial.*/

  let numeroBancario
  let opcaoEscolhida
  let saldoInicial = 1200
  let saldoAtual
  let valorSaque
  let valorDeposito

  alert('Bem vinda(o)')
  numeroBancario = parseInt(prompt('Digite o número da sua conta bancária: '))
  opcaoEscolhida = parseInt(prompt('Que tipo de operação deseja realizar?\n\nDigite:\n(1) Para saldo.\n(2) Para depósito.\n(3) Para saque.'))

  switch(true){

    case opcaoEscolhida == 1:
     alert('Seu saldo atual é de: R$' + saldoInicial)
    break

    case opcaoEscolhida == 2:
     valorDeposito = parseFloat(prompt('Digite o valor a ser depositado: '))
     saldoAtual = valorDeposito + saldoInicial
     alert('Depósito aceito! Seu saldo atual é de: R$' + saldoAtual)
    break

    case opcaoEscolhida == 3:
      valorSaque = parseFloat(prompt('Digite o valor a ser sacado: '))
      saldoAtual = saldoInicial - valorSaque
      alert('Saque aceito! Seu saldo atual é de: R$' + saldoAtual)
    break

    default:

    alert('Digite uma escolha válida!')
    break

  }