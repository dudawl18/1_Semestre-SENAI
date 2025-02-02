/*Uma feira de livros está fazendo promoção onde na compra de 3 livros,  o(a) comprador(a) ganha 15% de desconto. 
Criar um programa que receba os valores dos 3 livros 
e mostra na tela o total dos livros sem desconto e com desconto.*/

let valorLivroUm , valorLivroDois , valorLivroTres
let somaLivrosSemDesconto
let somaLivrosComDesconto
let  valorDesconto
let percentualDesconto = 15

valorLivroUm = Number(prompt('Valor do primeiro livro (R$): '))

valorLivroDois = Number(prompt('Valor do segundo livro (R$): '))

valorLivroTres = Number(prompt('Valor do terceiro livro (R$): '))

// Calculos

somaLivrosSemDesconto = valorLivroUm + valorLivroDois + valorLivroTres
valorDesconto = (somaLivrosSemDesconto + percentualDesconto) / 100
somaLivrosComDesconto = somaLivrosSemDesconto - valorDesconto

alert('Valor sem desconto: R$ ' + somaLivrosSemDesconto)
alert('Valor do desconto: R$ ' + valorDesconto)
alert('Valor com desconto: R$ ' + somaLivrosComDesconto)