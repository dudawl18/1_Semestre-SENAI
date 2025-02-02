// 1) Criar um projeto com HTML e JS, onde o usuário possa digitar três notas (inputs) e clicar em um botão para calcular a média (mostrar por alert).

let elementoInptUm = document.getElementById('inptUm')
let elementoInptDois = document.getElementById('inptDois')
let elementoInptTres = document.getElementById('inptTres')
let somaNotas
let notasMedia
let mediaNotasArrend

function MediaNotas(){

 somaNotas = Number(elementoInptUm.value) + Number(elementoInptDois.value) + Number(elementoInptTres.value)
 notasMedia = Number(somaNotas / 3)

 mediaNotasArrend = notasMedia.toFixed(2)

 alert('Sua média final é: ' + mediaNotasArrend)

}