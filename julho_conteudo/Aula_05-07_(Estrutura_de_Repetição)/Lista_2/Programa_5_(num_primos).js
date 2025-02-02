/*5) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. 
Um número primo é aquele que é divisível apenas por um e por ele mesmo.
 Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.*/

let numeroDigitado
let contador = 1
let numeroPrimo = true

 alert('Bem vinda(o)')

 numeroDigitado = Number(prompt('Digite um número para saber se ele é primo ou não:'))

 while(contador <= numeroDigitado){

    if(contador > 1 && contador < numeroDigitado){// para verificar se as contas do meio (depois de 1 e antes do numero digitado) dao em numero nao exata

        if(numeroDigitado % contador == 0){

            numeroPrimo = false

        }

    }

    contador++

}

if(numeroPrimo == false || numeroDigitado == 1){

    alert('Número NÃO é primo!')

}else{

    alert('Número é primo!')

}