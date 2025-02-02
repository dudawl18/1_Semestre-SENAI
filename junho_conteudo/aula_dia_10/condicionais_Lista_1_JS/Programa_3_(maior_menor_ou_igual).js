/*Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.*/

let numeroUm
let numeroDois

 alert('Bem vinda(o)')
 numeroUm = Number(prompt('Digite o primeiro número: '))
 numeroDois = Number(prompt('Digite o segundo número: '))


 if(numeroUm > numeroDois){
    
    alert(`O maior número é: ${numeroUm} \ne o menor número é: ${numeroDois}`)

 }else if(numeroDois > numeroUm){

    alert(`O maior número é: ${numeroDois} \ne o menor número é: ${numeroUm}`)

 }else{

 alert('Os números são iguais!')

 }

