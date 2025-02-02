/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, 
realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. */

let pesoUsuario
let alturaUsuario
let calculoIMC

pesoUsuario = Number(prompt('Digite o seu peso: '))
alturaUsuario = Number(prompt('Digite a sua altura: '))

calculoIMC = pesoUsuario / (alturaUsuario * alturaUsuario)

alert('O seu IMC é de: ' + calculoIMC)