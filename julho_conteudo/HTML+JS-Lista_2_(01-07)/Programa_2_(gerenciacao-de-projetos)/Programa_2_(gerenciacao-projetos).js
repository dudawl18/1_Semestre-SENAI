 /*2) Criar um sistema para gerenciar projetos e valores de projetos, com HTML e JS. 
 O sistema deve deve seguir o layout anexo (imagem).
 O usuário deverá informar dados de 5 projeto (nome do projeto, valor cobrado por hora 
 e quantidade de horas previstas para concluir).*/

 let pUmValorHora = document.getElementById('proUmValorHora')
 let pDoisValorHora = document.getElementById('proDoisValorHora')
 let pTresValorHora = document.getElementById('proTresValorHora')
 let pQuatroValorHora = document.getElementById('proQuatroValorHora')
 let pCincoValorHora = document.getElementById('proCincoValorHora')

 let pUmQuantHora = document.getElementById('proUmQuantHora')
 let pDoisQuantHora = document.getElementById('proDoisQuantHora')
 let pTresQuantHora = document.getElementById('proTresQuantHora')
 let pQuatroQuantHora = document.getElementById('proQuatroQuantHora')
 let pCincoQuantHora = document.getElementById('proCincoQuantHora')

 let pUmTotal = document.getElementById('totalProUm')
 let pDoisTotal = document.getElementById('totalProDois')
 let pTresTotal = document.getElementById('totalProTres')
 let pQuatroTotal = document.getElementById('totalProQuatro')
 let pCincoTotal = document.getElementById('totalProCinco')
 let valorProUm, valorProDois, valorProTres, valorProQuatro, valorProCinco, contaTotal
 let totalGeral = document.getElementById('totalGeral')
 
    function Calcular(){

     //calculo do valor total de cada projeto
     valorProUm = Number(pUmValorHora.value) * Number(pUmQuantHora.value)
     valorProDois = Number(pDoisValorHora.value) * Number(pDoisQuantHora.value)
     valorProTres = Number(pTresValorHora.value) * Number(pTresQuantHora.value)
     valorProQuatro = Number(pQuatroValorHora.value) * Number(pQuatroQuantHora.value)
     valorProCinco = Number(pCincoValorHora.value) * Number(pCincoQuantHora.value)

     contaTotal = valorProUm + valorProDois + valorProTres + valorProQuatro + valorProCinco

     pUmTotal.value = valorProUm
     pDoisTotal.value = valorProDois
     pTresTotal.value = valorProTres
     pQuatroTotal.value = valorProQuatro
     pCincoTotal.value = valorProCinco

     totalGeral.value = contaTotal

    }