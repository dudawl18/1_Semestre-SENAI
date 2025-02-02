/*3) Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número. 
Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7. 
Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.*/

let opcaoDiaSemana

 alert('Bem Vinda(o)')
 alert('Esse programa lhe informa que dia da semana correspondente ao número digitado')
 opcaoDiaSemana = parseInt(prompt('Digite o dia da semana desejado:\n\n1)Domingo\n2)Segunda\n3)Terça\n4)Quarta\n5)Quinta\n6)Sexta\n7)Sábado'))

    switch(opcaoDiaSemana){
   
     case 1:

     alert('O número digitado corresponde ao Domingo')
     break
   
     case 2:
   
     alert('O número digitado corresponde a Segunda-Feira')
     break

     case 3:
      
     alert('O número digitado corresponde a Terça-Feira')
     break 
     
     case 4:
      
     alert('O número digitado corresponde a Quarta-Feira')
     break
     
     case 5:
      
     alert('O número digitado corresponde a Quinta-Feira')
     break

     case 6:
      
     alert('O número digitado corresponde a Sexta-Feira')
     break
    
     case 7:
      
     alert('O número digitado corresponde ao Sábado')
     break



        default:

         alert('Número inválido. Digite um número entre 1 e 7!')}