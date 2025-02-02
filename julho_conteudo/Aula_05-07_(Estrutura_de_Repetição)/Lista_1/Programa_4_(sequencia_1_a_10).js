/*4) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. 
Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
 Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".*/

 let sequenciaDigitada
 let contador = 10

  alert('Bem vinda(o)')

  while(contador != 0){
    
    sequenciaDigitada = Number(prompt('Digite um número: '))

    if(sequenciaDigitada == contador){
     
      contador--

    }

    else{

      alert('Você errou a sequência')

    }

  }
  
  alert('Você terminou a sequência corretamente')