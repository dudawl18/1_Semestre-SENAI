/*Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. 
Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.*/

 let numeroDigitado

  alert('Bem vinda(o)')
 numeroDigitado = parseInt(prompt('Digite um número inteiro: '))

    if(numeroDigitado % 3 === 0){

     alert('O número é múltiplo de 3!')

    }else{

     alert('O número não é múltiplo de 3.')

    }