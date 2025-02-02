/* 1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido. */

let valorDigitado
let contador = 1
let tabuada

   alert('Bem vinda(o)')
   alert('A seguir você tera que digitar um valor inteiro para mostrar a tabuada de 1 a 10')

   valorDigitado = parseInt(prompt('Digite um valor inteiro'))

    while(contador <= 10){

      tabuada = contador * valorDigitado

      alert('A tabuada de ' + contador + ' do valor digitado (' + valorDigitado + ') resultou em: ' + tabuada)

      contador++
    }