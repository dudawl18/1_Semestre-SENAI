/*Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. 
Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados).
 Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).*/

 let populacao
 let densidade
 let area

 alert('Bem vinda(o)')

 populacao = parseInt(prompt('Digite o total de habitantes da região: '))
 area = parseFloat(prompt('Digite a área da região: '))

 densidade = populacao / area

     if(densidade >= 100){

     alert('A densidade é igual a ' + densidade + ', portanto ela é alta')

    }else if(densidade >= 25 && densidade < 100){

     alert('A densidade é igual a ' + densidade + ', portanto ela é média')

     }else{

      alert('A densidade é igual a ' + densidade + ', portanto ela é baixa')

     }