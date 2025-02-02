/*2) Criar uma mini-calculadora SIMPLES, com HTML e JS.
A calculadora deve ter:

-> Título, duas labels, dois inputs e quatro botões.
-> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
-> Mostra o resultado em um alert.*/

 let valorInptUm = document.getElementById('inptUm')
 let valorInptDois = document.getElementById('inptDois')
 let soma
 let subtracao
 let multiplicacao
 let divisao

    function SomaValores(){

     soma = Number(valorInptUm.value) + Number(valorInptDois.value)
     alert('Resultado da soma: ' + soma)

    }

    function SubtracaoValores(){

     subtracao = Number(valorInptUm.value) - Number(valorInptDois.value)
     alert('Resultado da subtração: ' + subtracao)

    }

    function MultiplicacaoValores(){

     multiplicacao = Number(valorInptUm.value) * Number(valorInptDois.value)
     alert('Resultado da multiplicação: ' + multiplicacao)

    }

    function DivisaoValores(){

    divisao = Number(valorInptUm.value) / Number(valorInptDois.value)
    alert('Resultado da divisão: ' + divisao)

    }