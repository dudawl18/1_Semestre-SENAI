/* Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.*/

let salario
let anosServico
let bonus = 0.05
let bonusComSalario

 alert('Bem vinda(o)')
 salario = Number(prompt('Digite o seu salário: '))
 anosServico = Number(prompt('Digite quantos anos você trabalhou: '))

 if(anosServico > 5){

  multipSalario = salario * bonus
  bonusComSalario = multipSalario + salario

  alert('Você tem o direito de receber o bônus!\n\nSeu salrio com bônus será de: ' + bonusComSalario)

 }else{

 alert('Você não tem direito ao bônus')

 }