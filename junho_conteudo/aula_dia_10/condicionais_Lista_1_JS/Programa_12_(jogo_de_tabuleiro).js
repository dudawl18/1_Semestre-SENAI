/*12) Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado). 
Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada.
 Caso o resultado da moeda tenha sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!". 
 Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. Mostrar mensagens "Avance X casas no tabuleiro!", 
 sendo X o número que saiu no dado.*/

 let resultadoMoeda
 let resultadoDado

 alert('Bem vinda(o)')
 resultadoMoeda = prompt('Digite o resultado da jogada da moeda: ')
 resultadoDado = parseInt(prompt('Digite o resultado da jogada de dado: '))

 if(resultadoMoeda == 'Cara' || resultadoMoeda == 'cara'){

 alert('Você perdeu sua vez')

 }else if(resultadoMoeda == 'Coroa' || resultadoMoeda == 'coroa'){

 alert('Avance ' + resultadoDado + ' casas no tabuleiro!')

 }