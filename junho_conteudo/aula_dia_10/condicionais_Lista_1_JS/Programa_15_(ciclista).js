/*15) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes.
 O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), 
 Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), 
 Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, 
 em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho.
  Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. 
  Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", 
  caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" 
  e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"*/
  
  let trechoUmKM = 30
  let trechoDoisKM = 45
  let trechoTresKM = 30
  let trechoQuatroKM = 35
  let nomeEquipe
  let integranteUm, integranteDois, integranteTres, integranteQuatro
  let tempoInteUm, tempoInteDois, tempoInteTres, tempoInteQuatro
  let velMediaTrechoUm, velMediaTrechoDois, velMediaTrechoTres, velMediaTrechoQuatro
  let velMediaGeralSoma, velMediaGeralFinal
  let resulVelArredondado

   alert('Bem vinda(o)')
  nomeEquipe = prompt('Digite o nome da equipe: ')
  integranteUm = prompt('Digite o nome do primeiro integrante: ')
  integranteDois = prompt('Digite o nome do segundo integrante: ')
  integranteTres = prompt('Digite o nome do terceiro integrante: ')
  integranteQuatro = prompt('Digite o nome do quarto integrante: ')

  tempoInteUm = Number(prompt('Digite o tempo em horas que gastou pedalando no trecho 1:'))
  tempoInteDois = Number(prompt('Digite o tempo em horas que gastou pedalando no trecho 2:'))
  tempoInteTres = Number(prompt('Digite o tempo em horas que gastou pedalando no trecho 3:'))
  tempoInteQuatro = Number(prompt('Digite o tempo em horas que gastou pedalando no trecho 4:'))

   velMediaTrechoUm = trechoUmKM / tempoInteUm
   velMediaTrechoDois = trechoDoisKM / tempoInteDois
   velMediaTrechoTres = trechoTresKM / tempoInteTres
   velMediaTrechoQuatro = trechoQuatroKM / tempoInteQuatro

   velMediaGeralSoma = velMediaTrechoUm + velMediaTrechoDois + velMediaTrechoTres + velMediaTrechoQuatro
   velMediaGeralFinal = velMediaGeralSoma / 4
   resulVelArredondado = Math.round(velMediaGeralFinal * 100) / 100

   if(velMediaGeralFinal < 15){

    alert('A velocidade média geral foi de ' + resulVelArredondado + 'km/h' + '. O desempenho pode melhorar bastante!')

   }else if(velMediaGeralFinal >= 15 && resulVelArredondado <= 18 ){

    alert('A velocidade média geral foi de ' + resulVelArredondado + 'km/h' + '. Desempenho bom, mas ainda pode melhorar!')

   }else{

    alert('A velocidade média geral foi de ' + resulVelArredondado + 'km/h' + '. Desempenho excelente. Parabéns!')

   }

   alert('A velocidade média de cada trecho foi:\n\nTrecho 1: ' + velMediaTrechoUm + 'km/h' +  '\nTrecho 2: ' + velMediaTrechoDois + 'km/h' + '\nTrecho 3: ' + velMediaTrechoTres + 'km/h' +  '\nTrecho 4 :' + velMediaTrechoQuatro +'km/h')