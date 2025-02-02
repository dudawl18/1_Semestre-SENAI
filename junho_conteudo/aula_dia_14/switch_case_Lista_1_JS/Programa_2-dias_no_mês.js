/*2) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. 
Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março.
Mostrar na tela "O mês possui 31 dias".*/

 let opcaoMes

 alert('Bem vinda(o)')
 alert('Esse programa lhe informa quantos dias tem o mês que você escolhe')
 opcaoMes = parseInt(prompt('Digite o mês desejado:\n\n1)Janeiro\n2)Fevereiro\n3)Março\n4)Abril\n5)Maio\n6)Junho\n7)Julho\n8)Agosto\n9)Setembro\n10)Outubro\n11)Novembro\n12)Dezembro'))

 switch(opcaoMes){

    case 1:
  
    alert('O mês possui 31 dias')
    break
    
       case 2:

       alert('O mês possui 28 dias')
       break
      
        case 3:
      
        alert('O mês possui 31 dias')
        break
      
        case 4:
  
        alert('O mês possui 30 dias')
        break
      
        case 5:
      
        alert('O mês possui 31 dias')
        break
   
        case 6:
   
        alert('O mês possui 30 dias')
        break
    
        case 7:
          
        alert('O mês possui 31 dias')
        break
      
        case 8:
             
        alert('O mês possui 31 dias')
        break 
   
        case 9:
   
        alert('O mês possui 30 dias')
        break
      
        case 10:
             
        alert('O mês possui 31 dias')
        break 
    
        case 11:
   
        alert('O mês possui 30 dias')
        break
      
        case 12:
             
        alert('O mês possui 31 dias')
        break
        }