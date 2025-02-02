/*10) Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema. 
Deve ser perguntado o valor do ingresso e a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 50% no ingresso do cinema. 
Se ela tiver de 13 a 17 anos, conceda um desconto de 25%. Caso contrário (18 anos ou mais), não conceda nenhum desconto. 
Mostrar ao final o valor que a pessoa deve pagar.*/

 let idadePessoa
 let valorIngresso
 let ingressoComDesconto

 alert('Bem vinda(o)')

 valorIngresso = parseFloat(prompt('Digite o valor do ingresso: R$'))
 idadePessoa = parseInt(prompt('Digite a sua idade: '))
 
 if(idadePessoa <= 12){

  ingressoComDesconto = valorIngresso * 50 / 100

  alert('Você recebeu 50% de desconto no seu ingresso')
  alert('O valor final do ingresso com desconto ficou: ' + ingressoComDesconto + ' reais')

 }else if(idadePessoa >= 13 && idadePessoa <= 17){

  ingressoComDesconto = valorIngresso * 25 / 100

  alert('Você recebeu 25% de desconto no seu ingresso')
  alert('O valor final do ingresso com desconto ficou: ' + ingressoComDesconto + ' reais')

 }else{

 alert('Você não tem direito a desconto, ou seja, seu ingresso custará ' + valorIngresso + ' reais')

 }