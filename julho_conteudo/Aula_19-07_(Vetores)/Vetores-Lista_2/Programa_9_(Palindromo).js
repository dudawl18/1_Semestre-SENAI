/*9) Palíndromo é aquele elemento que, se lido de trás para frente e de frente para trás, é o mesmo. 
Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. 
(DESAFIO: fazer com 7 números e com palavras. Pesquisar o método de string split() que é muito legalzão).*/

let vetorNumeros = []
let addNumero
let vetorPalindromo = true
let j = 5

   alert('Bem vinda(o)')

    for (i = 0; i < 6; i++) {

      numeroAdd = Number(prompt('Digite um número: '))

    }

    console.log(vetorNumeros)

    for (i = 0; i < 3; i++) {

        if(vetorNumeros[i] != vetorNumeros[j]){

          vetorPalindromo = false

        }
        
      j--

    }

    if(vetorPalindromo){    // quando tem ! na frente da variável ta verificando se é falso  (quando é booleana)

       alert('Vetor é um palíndromo!')

    }else{

       alert('Vetor não é um palíndromo!')

    }