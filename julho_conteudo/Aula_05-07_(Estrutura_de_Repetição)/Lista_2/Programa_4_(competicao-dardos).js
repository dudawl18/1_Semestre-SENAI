/*4) Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% 
ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. 
Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão.
Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor 
e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) 
e se ele está classificado, se foi para a repescagem ou se está desclassificado.*/

let pontosArremessos = 0
let somaArreme = 0
let contador = 0
let pontosMax = 60
let porcenProxFase = 75    // porcentagem minima para alcançar a proxima fase
let porcenRepescagem = 50   // porcentagem minima para não ser eliminado
let pontosPorcen50, pontosPorcen75   

 alert('Bem vinda(o) ao consultor de pontuação e classificação da competição de dardos')


    while(contador < 6){
            
      pontosArremessos = parseInt(prompt('Digite a pontuação do arremesso (de 0 a 10): '))

      if(pontosArremessos < 0 || pontosArremessos > 10){

        alert('Valor Inválido!')

      }

      somaArreme += pontosArremessos

      contador++

    }
    
  alert('A pontuação total dos arremessos é de: ' + somaArreme)

  // transformando as porcentagem em pontos (usando a informação da pontuação máxima)

  pontosPorcen75 = (pontosMax * porcenProxFase) / 100
  pontosPorcen50 = (pontosMax * porcenRepescagem) / 100

    if(somaArreme >= pontosPorcen75){

      alert('Você passou para a próxima fase!')

    }

    else if(somaArreme >= pontosPorcen50 && somaArreme < pontosPorcen75){

      alert('Você ficou na repescagem')

    }else{

      alert('Você foi eliminada(o)')

    }