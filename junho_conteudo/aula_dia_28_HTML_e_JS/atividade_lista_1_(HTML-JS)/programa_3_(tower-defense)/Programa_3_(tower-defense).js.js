/*3) Criar um sistema clássico de jogos Tower Defense (Defesa de Torre) de acordo com a imagem disponibilizada. A Torre começa com estrutura em 100 e o usuário pode destruir ou construir, digitando valores nos campos e clicando nos botões de menos e mais. O valor de estrutura deve ser atualizado após destruir ou construir.

A situação da Torre começa como Ativa, mas caso sua estrutura chegue em zero ou abaixo, atualizar a situação para "Destruída".*/

let vidaTorre = document.getElementById('inptVida')
let elementoInptMenos = document.getElementById('inptMenos')
let elementoInptMais = document.getElementById('inptMais')
let vidaFinalTorre 
let situacaoTorre = document.getElementById('inptStatus')

let vidaInicial = 100

   function MaisVida(){

    vidaFinalTorre = Number(vidaTorre.value) + Number(elementoInptMais.value)

    vidaTorre.value = vidaFinalTorre

      if(vidaFinalTorre >= 100){

        situacaoTorre.value = "Ativa"

      }
   }


   function MenosVida(){

    vidaFinalTorre = Number(vidaTorre.value) - Number(elementoInptMenos.value)

    vidaTorre.value = vidaFinalTorre

      if(vidaFinalTorre <= 0){

        situacaoTorre.value = "Destruída"
        
      }

   }