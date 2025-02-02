/*Crie um programa onde o usuário digite um número e informe se é positivo ou negativo.*/

let numeroDigitado

 alert('Bem vinda(o)')
 numeroDigitado = Number(prompt('Digite um número: '))

     if (numeroDigitado > 0){

     alert('O número digitado é positivo')

     }else if(numeroDigitado < 0){ 

     alert('O número digitado é negativo')

     }else{

     alert('O número digitado é 0, ou seja, ele é neutro')

     }