/*4) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas 
e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso 
e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa),
 de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).*/

 let pontuacaoUm
 let pontuacaoDois
 let pontuacaoTres
 let somaPontuacao

 alert('Bem vinda(o)')

 pontuacaoUm = Number(prompt('Digite a pontuação do primeiro arremesso:'))
 pontuacaoDois = Number(prompt('Digite a pontuação do segundo arremesso:'))
 pontuacaoTres = Number(prompt('Digite a pontuação do terceiro arremesso:'))

 somaPontuacao = pontuacaoUm + pontuacaoDois + pontuacaoTres

     switch(true){

        case somaPontuacao == 15:
          alert('Você fez ' + somaPontuacao + ' pontos no total. Sua classificação é "deus da peteca"')
        break

        case somaPontuacao >= 10 && somaPontuacao <= 14:
          alert('Você fez ' + somaPontuacao + ' pontos no total. Sua classificação é "petequeiro profissa"')
        break

        case somaPontuacao >= 5 && somaPontuacao <= 9:
         alert('Você fez ' + somaPontuacao + ' pontos no total. Sua classificação é "petequeiro de final de semana"')
        break

        case somaPontuacao >= 1 && somaPontuacao <= 4:
          alert('Você fez ' + somaPontuacao + ' pontos no total. Sua classificação é "pseudo-petequeiro"')
        break

        case somaPontuacao == 0:
          alert('Você fez ' + somaPontuacao + ' pontos no total. Sua classificação é "nunca petequeiro"')
        break
        
    }