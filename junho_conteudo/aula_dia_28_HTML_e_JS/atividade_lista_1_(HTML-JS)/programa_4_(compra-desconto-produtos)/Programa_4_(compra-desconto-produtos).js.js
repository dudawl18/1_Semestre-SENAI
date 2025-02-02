 /*4) Criar um sistema para compra de produtos + desconto, com HTML e JS.
 O sistema deve deve seguir o layout anexo (imagem).

  - O usuário deverá informar dados de 4 produtos (descrição, quantidade e valor).
  - Um percentual de desconto deve ser informado.
  - Ao final deve ser mostrado o valor total da compra com o desconto.*/

  let primeiroProdutoQuant = document.getElementById('quantProdutoUm')
  let segundoProdutoQuant = document.getElementById('quantProdutoDois')
  let terceiroProdutoQuant = document.getElementById('quantProdutoTres')
  let quartoProdutoQuant = document.getElementById('quantProdutoQuatro')
  let valorProdutoUm = document.getElementById('valorUm')
  let valorProdutoDois = document.getElementById('valorDois')
  let valorProdutoTres = document.getElementById('valorTres')
  let valorProdutoQuatro = document.getElementById('valorQuatro')
  let totalProdutoUm, totalProdutoDois, totalProdutoTres, totalProdutoQuatro
  let somaProdutosValores
  let percentualDesconto = document.getElementById('inptDesconto')
  let descontoValor  //quantia que será descontada da compra final
  let valorFinalComDesconto
  let valorFinalMostrado = document.getElementById('valorFinal')

  function Calcular(){

  //Calculando qual será o total a ser pago por cada produto (preço do produto multiplicado pela quantidade)

  totalProdutoUm = Number(primeiroProdutoQuant.value) * Number(valorProdutoUm.value)
  totalProdutoDois = Number(segundoProdutoQuant.value) * Number(valorProdutoDois.value)
  totalProdutoTres = Number(terceiroProdutoQuant.value) * Number(valorProdutoTres.value)
  totalProdutoQuatro = Number(quartoProdutoQuant.value) * Number(valorProdutoQuatro.value)

  //Calculando o valor de todos os produtos juntos

  somaProdutosValores = totalProdutoUm + totalProdutoDois + totalProdutoTres + totalProdutoQuatro
  
  descontoValor = (somaProdutosValores * Number(percentualDesconto.value)) / 100
  valorFinalComDesconto = somaProdutosValores - descontoValor

  valorFinalMostrado.value = valorFinalComDesconto

  }