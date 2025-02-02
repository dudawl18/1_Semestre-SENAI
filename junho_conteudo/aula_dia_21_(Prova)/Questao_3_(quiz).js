/*Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional SWITCH / CASE. 
O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

A) Van Helsing (2 pontos)
B) Castlevania (3 pontos)
C) The Vampire Diaries (2 pontos)
D) Blade: The Series (1 ponto)

2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

A) Alice no País das Maravilhas (1 ponto)
B) O Hobbit (1 ponto)
C) A Fantástica Fábrica de Chocolates (1 ponto)
D) Coraline (2 pontos)

3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

A) The Legend of Zelda (3 pontos)
B) Kirby (2 pontos)
C) Metroid (3 pontos)
D) Super Mario Bros (2 pontos)

4) Quais dos autores citados, representam melhor o gênero de livros de terror?

A) Stephen King (2 pontos)
B) Edgar Allan Poe (2 pontos)
C) H.P. Lovecraft (2 pontos)
D) Mary Shelley (1 ponto)

Critérios de avaliação:

(0,5) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
(1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos.
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
(0,5) Mostrar na tela ao final, quais foram as opções / respostas escolhidas em cada pergunta.
(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir além da pontuação, uma mensagem "Parabéns!"*/

 let respostaQuestaoUm
 let respostaQuestaoDois
 let respostaQuestaoTres
 let respostaQuestaoQuatro
 let somaPontos
 let pontoUm, pontoDois, pontoTres, pontoQuatro

 alert('Boas vindas ao quiz de cultura pop')
 alert('O quiz a seguir contém 4 perguntas com 4 alternativas cada uma. Cada alternativa tem uma pontuação atribuída a ela.\n\n Você deve digitar a letra que representa a alternativa que escolheu (a, b, c ou d)')
 alert('Vamos começar!')

 respostaQuestaoUm = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing \nB) Castlevania \nC) The Vampire Diaries \nD) Blade: The Series ').toLowerCase()

 respostaQuestaoDois = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas \nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates \nD) Coraline ').toLowerCase()

 respostaQuestaoTres = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda\nB) Kirby \nC) Metroid \nD) Super Mario Bros ').toLowerCase()

 respostaQuestaoQuatro = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King \nB) Edgar Allan Poe \nC) H.P. Lovecraft \nD) Mary Shelley ').toLowerCase()

     switch(respostaQuestaoUm){

        case 'a':
         pontoUm = 2 // Atribuição dos pontos da alternativa
        break

        case 'b':
         pontoUm = 3   
        break

        case 'c':
         pontoUm = 2
        break

        case 'd':
         pontoUm = 1
        break

        default:

        alert('Digite uma escolha válida! Você somou 0 pontos')
        break

    }
    switch(respostaQuestaoDois){

        case 'a':
         pontoDois = 1
        break

        case 'b':
         pontoDois = 1
        break

        case 'c':
         pontoDois = 1
        break

        case 'd':
         pontoDois = 2
        break

        default:

        alert('Digite uma escolha válida! Você somou 0 pontos')
        break
    
    }
    switch(respostaQuestaoTres){

        case 'a':
         pontoTres = 3
        break

        case 'b':
         pontoTres = 2
        break

        case 'c':
         pontoTres = 3
        break

        case 'd':
         pontoTres = 2
        break

        default:

        alert('Digite uma escolha válida! Você somou 0 pontos')
        break
    
    }
    switch(respostaQuestaoQuatro){

        case 'a':
         pontoQuatro = 2
        break

        case 'b':
         pontoQuatro = 2
        break

        case 'c':
         pontoQuatro = 2
        break

        case 'd':
         pontoQuatro = 1
        break

        default:

        alert('Digite uma escolha válida! Você somou 0 pontos')
        break
    
    }

    somaPontos = pontoUm + pontoDois + pontoTres + pontoQuatro

 alert('Alternativas escolhidas:\n\nQuestão 1: ' + respostaQuestaoUm + '\nQuestão 2: ' + respostaQuestaoDois + '\nQuestão 3: ' + respostaQuestaoTres + '\nQuestão 4: ' + respostaQuestaoQuatro)
 alert('Resultado da pontuação final: ' + somaPontos + ' pontos')

  switch(true){

  case somaPontos == 10:
  alert('Você atingiu ' + somaPontos + ' pontos, que é a pontução máxima! Parabens!!')

  }