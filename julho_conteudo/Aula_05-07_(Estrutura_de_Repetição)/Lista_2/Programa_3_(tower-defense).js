/* 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. 
Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

A) Ataque Bomba -100HP
B) Ataque Granada -80HP
C) Ataque Arqueiro -40HP
D) Defesa Escudo +20HP

Mostrar o HP do castelo atualizado a cada rodada. Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!" */

let vidaInicial = 500
let rodadas = 0
let opcaoEscolhida

alert('Bem vinda(o)')
alert('A seguir será apresentado um jogo de Tower Defense')

    while(vidaInicial > 0){
 
      opcaoEscolhida = prompt('Escolha entre um dos 3 tipos de ataque e um de defesa:\n\nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP').toUpperCase()

        switch(opcaoEscolhida){

            case 'A':

              vidaInicial = vidaInicial - 100
              alert('A vida atual da torre é de: ' + vidaInicial)
            break

            case 'B':

              vidaInicial = vidaInicial - 80
              alert('A vida atual da torre é de: ' + vidaInicial)
            break

            case 'C':

              vidaInicial = vidaInicial - 40
              alert('A vida atual da torre é de: ' + vidaInicial)
            break

            case 'D':

              vidaInicial = vidaInicial + 20
              alert('A vida atual da torre é de: ' + vidaInicial)
            break

            default:

             alert('Digite uma escolha válida!')
            break

        }

        rodadas++

        if(vidaInicial <= 0){

          alert('Jogo encerrado, com ' + rodadas + ' rodadas!')

        }


    }