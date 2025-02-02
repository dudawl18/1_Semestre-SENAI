/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. 
Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.*/

let quantidadePessoas = 45
let litrosChopp = 300
let mediaFinalBebidaPorPessoa
let mediaBebidaPorPessoa
let quantidadeDesperdicada, quantidadeSobrou

alert('Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.')
quantidadeDesperdicada = Number(prompt('Digite a quantidade de chopp (litros) desperdiçados: '))
quantidadeSobrou = Number(prompt('Digite a quantidade de chopp (litros) que sobrou: '))

mediaBebidaPorPessoa = litrosChopp - quantidadeDesperdicada - quantidadeSobrou
mediaFinalBebidaPorPessoa = mediaBebidaPorPessoa / quantidadePessoas

alert('Média de litros bebidos por pessoa na festa: ' + mediaFinalBebidaPorPessoa + ' litros')
alert('Quantidade de chopp desperdiçados: ' + quantidadeDesperdicada + ' litros')
alert('Quantidade de chopp que sobrou: ' + quantidadeSobrou + ' litros')