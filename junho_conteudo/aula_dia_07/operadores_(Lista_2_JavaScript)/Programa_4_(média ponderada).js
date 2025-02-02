/* Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. 
A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. 
O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.*/

 let mediaPonderada, mediaPonderadaArredon
 let somaPesos
 let atividadeIndividual
 let seminario
 let projetoFinal
 let pesoUm, pesoDois, pesoTres

  alert('Bem vinda(o)')
 atividadeIndividual = Number(prompt('Digite a nota da Atividade Individual: '))
 seminario = Number(prompt('Digite a nota do Seminário em Equipe: '))
 projetoFinal = Number(prompt('Digite a nota do Projeto Final: '))

 pesoUm = Number(prompt('Digite o peso da Atividade Individual: '))
 pesoDois = Number(prompt('Digite o peso do Seminário em Equipe: '))
 pesoTres = Number(prompt('Digite o peso do Projeto Final: '))

 somaPesos = pesoUm + pesoDois + pesoTres
 mediaPonderada = (pesoUm * atividadeIndividual + pesoDois * seminario + pesoTres * projetoFinal) / somaPesos

 mediaPonderadaArredon = mediaPonderada.toFixed(2)

 alert('A média final foi de: ' + mediaPonderadaArredon)