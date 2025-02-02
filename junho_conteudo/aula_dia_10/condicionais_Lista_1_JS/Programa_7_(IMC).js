/*7) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal)
 e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).*/

 let alturaDigitada
 let pesoDigitado
 let imc

 alert('Bem vinda(o)')

 alturaDigitada = parseFloat(prompt('Digite a sua altura: '))
 pesoDigitado = parseFloat(prompt('Digite a seu peso: '))

 imc = pesoDigitado / (alturaDigitada * alturaDigitada)

 if(imc < 18){

 alert('Seu IMC é igual a '+ imc + ', portanto você está abaixo do peso')

 }else if(imc >= 18 && imc <= 25){

 alert('Seu IMC é igual a '+ imc + ', portanto você está na faixa do peso ideal')

 }else{

 alert('Seu IMC é igual a '+ imc + ', portanto você está acima do peso')

 }