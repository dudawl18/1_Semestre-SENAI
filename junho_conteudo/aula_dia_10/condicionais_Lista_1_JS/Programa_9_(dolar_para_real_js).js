/*9) Elabore um programa que converta uma quantidade de dólares para reais. 
Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. 
Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.*/

 let valorDolares
 let cotacaoDolar
 let conversaoReal

 alert('Bem vinda(o)')
 alert('Você está prestes a realizar uma conversão de dólar para real')

 valorDolares = parseFloat(prompt('Digite a quantidade de dólares: '))
 cotacaoDolar = parseFloat(prompt('Digite a cotação do dólar para real: '))

 conversaoReal = valorDolares * cotacaoDolar

 alert('A conversão para reais resultou em: R$' + conversaoReal)

 if(cotacaoDolar > 5){

 alert('A cotação do dólar está ' + cotacaoDolar + ', portanto ela está cara.')

 }else{

 alert('A cotação do dólar está ' + cotacaoDolar + ', portanto está barata.')

 }