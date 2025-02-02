/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente       D) Sair*/

 let opcaoDigitada

 alert('Bem vinda(o)')
 
 opcaoDigitada = prompt('Digite a opção desejada:\n\n(A) Falar com a atendente\n(B) Falar com o RH\n(C) Falar com o gerente\n(D) Sair').toUpperCase()
 
 switch(opcaoDigitada){

  case 'A':

  alert('Você foi encaminhada(o) para falar com a atendente')
  break

    case 'B':

     alert('Você foi encaminhada(o) para falar com o RH')
     break

    
        case 'C':

         alert('Você foi encaminhada(o) para falar com o gerente')
         break

        case 'D':
   
         alert('Sair')
         break
        }