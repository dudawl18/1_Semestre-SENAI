/*3) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar 
e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. 
Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, 
exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”. */

 let numeroMulta
 let valorMulta
 let pontosCarteira 
 let contador = 0
 let somatoriaMulta = 0
 let somatoriaPontos = 0
 let pontosLimites = 21

 numeroMulta = Number(prompt('Quantas multas deseja cadastrar? '))
  
  
    while(numeroMulta > contador){

      valorMulta = Number(prompt('Digite o valor da multa: '))

      pontosCarteira = Number(prompt('Digite quantos pontos foram perdidos: '))

      somatoriaMulta = somatoriaMulta + valorMulta
      somatoriaPontos = somatoriaPontos + pontosCarteira

      contador++

    }

   alert('A somatoria de multa foi de: ' + somatoriaMulta + ' reais')
   alert('A somatoria de pontos foi de: ' + somatoriaPontos)

    if(numeroMulta == 0){

      alert('Digite um número de multas válido')

    }

        else if(somatoriaPontos >= pontosLimites){

         alert('Você está irregular')

        }else{

         alert('Você está regular')

        }