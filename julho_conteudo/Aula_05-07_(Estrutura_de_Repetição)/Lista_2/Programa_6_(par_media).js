/*6) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. 
Se algum número digitado não for par, ao final não será mostrada a média 
e sim uma mensagem “Um dos números digitados era ímpar”.*/

let numerosDigitados
let contador = 0
let somaNumeros = 0
let mediaNumeros

    alert('Bem vinda(o)')
    alert('A seguir digite 5 números pares e descubra sua média')

    while(contador < 5){

      numerosDigitados = parseInt(prompt('Digite um número par: '))

       somaNumeros += numerosDigitados

      contador++
      
        if (numerosDigitados % 2 !== 0){

         alert('Um dos números digitados era ímpar')
         break

        }

        if (contador === 5) {

       
        mediaNumeros = somaNumeros / 5

        alert('A média dos números pares digitados é: ' + mediaNumeros)
   
        }

    }
