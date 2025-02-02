/*6) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"*/

 let numeroDigitado

 alert('Bem vinda(o)')
 
 numeroDigitado =parseInt(prompt('Digite um número: '))

 if(numeroDigitado % 2 === 0){

 alert('O número é par!')

 }else{

 alert('O número é ímpar!')

 }