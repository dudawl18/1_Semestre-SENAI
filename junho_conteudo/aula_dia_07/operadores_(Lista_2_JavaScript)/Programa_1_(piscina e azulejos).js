/*1) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. 
 O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento.
 Digitar os valores (em metros) da largura e comprimento que deseja a piscina. 
 Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago,
 sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/

 let metroQuadradoAzulejo = 120
 let areaMetrosQuadrados
 let quantAzulejos, quantAzulejosArredon
 let largura, comprimento
 let caixaUnidade = 60
 let caixaPreco = 45.50
 let quantCaixas, quantCaixasArredon
 let totalAPagar, totalAPagarArredon

  alert('Bem vinda(o)')
  alert('Para realizar seu sonho de construir uma piscina você deve fazer alguns planejamentos')
 largura = parseFloat(prompt('Digite a largura que deseja para a piscina: '))
 comprimento = parseFloat(prompt('Digite o comprimento que deseja para a piscina: '))

  // Cálculos

 areaMetrosQuadrados = largura * comprimento   // descobrir a área total
 quantAzulejos = areaMetrosQuadrados * metroQuadradoAzulejo   // descobrir a quantidade de azulejos
 quantCaixas = quantAzulejos / caixaUnidade   // descobrir a quantidade de caixas
 totalAPagar = quantCaixas * caixaPreco   // descobrir o total a ser pago multiplicando o preço das caixas e a quantidade de caixas

 // Arredondamento

  quantAzulejosArredon = quantAzulejos.toFixed(2)
  quantCaixasArredon = quantCaixas.toFixed(2)
  totalAPagarArredon = totalAPagar.toFixed(2)

 // Saída de Dados

 alert('A quantidade de azulejos que deve ser comprada é de: ' + quantAzulejosArredon + ' azulejos, ou seja, ' + quantCaixasArredon + ' caixas')
 alert('O total a ser pago: R$' + totalAPagarArredon)