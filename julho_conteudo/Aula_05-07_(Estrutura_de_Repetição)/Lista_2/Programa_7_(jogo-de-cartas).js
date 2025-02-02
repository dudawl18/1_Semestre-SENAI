/* 7) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 
e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, 
e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados.
 Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma.
  Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". 
  (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho). */

 let jogadorUmNome
 let jogadorDoisNome
 let contador = 0
 let valorCartasJoUm = 0
 let valorCartasJoDois = 0
 let somaCartasJoUm = 0
 let somaCartasJoDois = 0

   alert('Bem vinda(o)')
   alert('A seguir irá ocorrer um jogo de cartas, cada jogador tem 5 cartas para jogar. Inicia pelo primeiro jogador, logo depois o segundo jogador, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados!')

   jogadorUmNome = prompt('Digite o nome do primeiro jogador: ')
   jogadorDoisNome = prompt('Digite o nome do segundo jogador: ')

    while(contador < 5){

      alert('Agora é a vez do jogador ' + jogadorUmNome)
      valorCartasJoUm = parseInt(prompt('Digite o valor de sua carta (jogador 1): ')) 

      while(valorCartasJoUm < 1 || valorCartasJoUm > 13){

        valorCartasJoUm = parseInt(prompt('Digite somente cartas com valores entre 1 e 13, como no baralho'))

      }

      alert('Agora é jogador ' + jogadorDoisNome)
      valorCartasJoDois = parseInt(prompt('Digite o valor de sua carta (jogador 2): ')) 
      
      while(valorCartasJoDois < 1 || valorCartasJoDois > 13){

        valorCartasJoDois = parseInt(prompt('Digite somente cartas com valores entre 1 e 13, como no baralho'))

      }

      somaCartasJoUm += valorCartasJoUm
      somaCartasJoDois += valorCartasJoDois
    
      contador++
    }

      if(somaCartasJoUm > somaCartasJoDois){

       alert('O jogador' + jogadorUmNome + ' foi quem teve a maior soma, com ' + somaCartasJoUm + ' pontos')

      }else if(somaCartasJoDois > somaCartasJoUm){

        alert('O jogador' + jogadorDoisNome + ' foi quem teve a maior soma, com ' + somaCartasJoDois + ' pontos')
 
      }else if(somaCartasJoUm == somaCartasJoDois){

        alert('O jogador ' + jogadorUmNome + ' e o jogador ' + jogadorDoisNome + ' empataram, com ' + somaCartasJoUm + ' pontos')

      }