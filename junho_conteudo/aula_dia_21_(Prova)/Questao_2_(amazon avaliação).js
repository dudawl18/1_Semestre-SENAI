/*2) No site Amazon, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir 
se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, 
destaque na página de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: 
qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional SWITCH / CASE, 
que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele.
 Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), 
 índice de 5 a menor que 7 (destaque na página da categoria), índice de 7 a menor que 9 (destaque em promoções),
 índice igual ou maior a 9 (destaque na página principal).

Critérios de avaliação:

(1,0) Receber e armazenar as notas dos três quesitos (avaliação).
(1,0) Calcular o índice do produto (média aritmética) com três casas após a vírgula e mostrar na tela.
(1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.*/

 let qualidadeProdutoNota
 let custoBeneficioNota
 let durabilidadeNota
 let somaNotas, indiceNotas, indiceNotasArredondado

 alert('Bem vinda(o) ao sistema de avaliação')
 alert('A seguir você deve digitar uma nota de 0 a 10 para os quesitos do produto')

 qualidadeProdutoNota = Number(prompt('Digite uma nota para a qualidade do produto:'))
 custoBeneficioNota = Number(prompt('Digite uma nota para o custo benefício do produto:'))
 durabilidadeNota = Number(prompt('Digite uma nota para a durabilidade do produto:'))

 somaNotas = qualidadeProdutoNota + custoBeneficioNota + durabilidadeNota
 indiceNotas = somaNotas / 3

 indiceNotasArredondado = indiceNotas.toFixed(3)

     switch(true){

        case indiceNotasArredondado < 5:
         alert('O índice foi de ' + indiceNotasArredondado + '. Portanto, o produto não ganha destaque')
        break

        case indiceNotasArredondado >= 5 && indiceNotasArredondado < 7:
         alert('O índice foi de ' + indiceNotasArredondado + '. Portanto, produto ganha destaque na página da categoria dele')
        break

        case indiceNotasArredondado >= 7 && indiceNotasArredondado < 9:
         alert('O índice foi de ' + indiceNotasArredondado + '. Portanto, o produto ganha destaque na página de promoções')
        break

        case indiceNotasArredondado >= 9:
         alert('O índice foi de ' + indiceNotasArredondado + '. Portanto, o produto ganha destaque na página principal')
        break

    }