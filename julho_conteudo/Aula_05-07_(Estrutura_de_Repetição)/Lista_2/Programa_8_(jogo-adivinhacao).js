/*8) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). 
Em seguida deve ser perguntado qual número imagina-se que seja o número secreto.
 A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior".
  Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. 
  (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor) */

  let numeroSecreto
  let numeroPalpite
  let quantidadePalpites = 0
  let max = 100
  let min = 0

  //alert('Bem vinda(o) ao jogo de adivinhação')

  numeroSecreto = Math.floor(Math.random() * (max - min) + min)
 

  while(numeroPalpite != numeroSecreto){

    numeroPalpite = Number(prompt('Digite um palpite (0-100): '))

    quantidadePalpites++

      if(numeroPalpite < numeroSecreto){

        alert('O número secreto é maior!')

      }else if(numeroPalpite > numeroSecreto){

        alert('O número secreto é menor')

      }else{

        alert('Parabéns, você achou o número secreto!! ' + 'O número secreto era ' + numeroSecreto + '\nA quantidade de palpites foi de: ' + quantidadePalpites)

      }



  }

