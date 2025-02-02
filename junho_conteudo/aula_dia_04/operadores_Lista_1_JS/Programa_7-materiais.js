/*Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 
e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica
 e mostrar o total que receberá em reais. */

 let plasticoKg, papelKg, metalKg
 let totalPlastico, totalPapel, totalMetal, totalReais
 let plasticoPreco = 2.00
 let papelPreco = 3.00
 let metalPreco = 5.00


 plasticoKg = Number(prompt('Digite a quantidade (kg) de plástico que deseja: '))
 papelKg = Number(prompt('Digite a quantidade (kg) de papel que deseja: '))
 metalKg = Number(prompt('Digite a quantidade (kg) de metal que deseja: '))

//cálculos materiais

totalPlastico = plasticoPreco * (plasticoKg / 10)
totalPapel = papelPreco * (papelKg / 30)
totalMetal = metalPreco * (metalKg / 50)

totalReais = totalPlastico + totalPapel + totalMetal

alert('O total será de: ' + totalReais + ' reais')