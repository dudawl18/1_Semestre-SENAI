/*Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. */

let temperaturaDigitada
let resultadoConversao

temperaturaDigitada = Number(prompt('Digite a temperatura em Celcius: '))

resultadoConversao = 1.8 * temperaturaDigitada + 32

alert('O resultado da conversão é: ' + resultadoConversao + ' °F')