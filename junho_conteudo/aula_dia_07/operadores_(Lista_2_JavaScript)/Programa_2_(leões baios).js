/*2) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, 
exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. 
Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. 
Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total 
e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.*/

 let individuoTerritorio = 320
 let casalTerritorio = 400
 let leoesFemeas = 9
 let leoesMachos = 5
 let todosLeoes
 let leoesIndividuais
 let individuosArea
 let casais
 let casaisArea
 let somaGeralArea

  alert('Bem vinda(o)')
 leoesIndividuais = leoesFemeas - leoesMachos

 todosLeoes = leoesFemeas + leoesMachos
 casais = (todosLeoes - leoesIndividuais) / 2 

 casaisArea = casais * casalTerritorio
 individuosArea = leoesIndividuais * individuoTerritorio

 somaGeralArea = casaisArea + individuosArea
 alert('Nessa reserva existem '+ leoesFemeas + ' leõas fêmeas e '+ leoesMachos + ' leões machos')
 alert('O total de casais de leões é de ' + casais + ', enquanto o número de leões indivíduais é de ' + leoesIndividuais)
 alert('A soma geral de aréa dominada é de ' + somaGeralArea  + 'km²')