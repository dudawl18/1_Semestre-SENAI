/*5) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. 
Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. 
(DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)*/

let nomePessoas 
let idadePessoas 
let contador = 0
let somaIdade = 0
let mediaIdade
let maiorIdade = 0
let pessoaMaiorIdade = ''
 
  alert('Bem vinda(o)')
  alert('A seguir você deve digitar o nome de cinco pessoas e suas respectivas idade para descobrir a média e a maior idade')

    while(contador < 5){

      nomePessoas = prompt('Digite o nome da pessoa: ')
      idadePessoas = Number(prompt('Digite a idade da pessoa: '))

        if(idadePessoas <= 0){

          alert('Digite uma idade válida!')

        }

        if(maiorIdade < idadePessoas){

          maiorIdade = idadePessoas
          pessoaMaiorIdade = nomePessoas

        }

        somaIdade += idadePessoas // somar todas as idades que foram digitadas

      contador ++
    }

     mediaIdade = somaIdade / 5

   alert('A média de idades é ' + mediaIdade.toFixed(2))

   alert('A pessoa que tem a maior idade é ' + pessoaMaiorIdade + ', ela tem ' + maiorIdade + ' anos')