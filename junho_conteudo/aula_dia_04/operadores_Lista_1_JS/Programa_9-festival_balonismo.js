/* Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. 
No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. 
Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.*/

let relacaoMinutos = 5
let relacaoGas = 10
let valorMetroGas = 15
let gasPorMinuto
let quantasPessoasPasseio, tempoPasseio
let taxaPorPessoa = 20
let valorTotalTaxa, valorTotalGas, valorTotalPasseio
let totalGasPasseio

 quantasPessoasPasseio = Number(prompt('Digite quantas pessoas vão no passeio: '))
 tempoPasseio = Number(prompt('Digite o tempo de passeio: '))

 gasPorMinuto = relacaoGas / relacaoMinutos

 valorTotalTaxa = quantasPessoasPasseio * taxaPorPessoa
 totalGasPasseio = tempoPasseio * gasPorMinuto
 valorTotalGas = totalGasPasseio * valorMetroGas
 
 valorTotalPasseio = valorTotalTaxa + valorTotalGas

 alert('Valor total cobrado pelo passeio: R$' + valorTotalPasseio)
 alert('Total gasto com a taxa: R$ ' +  valorTotalTaxa)
 alert('Total gasto com o gás: R$ ' + valorTotalGas)