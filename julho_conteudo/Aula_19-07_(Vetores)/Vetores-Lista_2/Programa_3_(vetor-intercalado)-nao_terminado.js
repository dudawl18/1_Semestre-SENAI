/*3) Escreva um programa no qual o usuário digite dois vetores com 3 elementos cada (primeiro os elementos de um, depois os de outro)
e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. 
Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.*/

 let vetorUm = []
 let vetorDois = []
 let vetorIntercalado = []
 let numeroAdd

   alert('Bem vinda(o)')

    for(i=0; i < 3; i++){

       numeroAdd = Number(prompt(`Número ${i+1} do vetor 1:`))
       vetorUm.push(numeroAdd)

       numeroAdd = Number(prompt(`Número ${i+1} do vetor 2:`))
       vetorDois.push(numeroAdd)

    }

    for(i=0; i < 3; i++){

      numeroAdd = vetorUm[i]
      vetorIntercalado.push(numeroAdd)
 
      numeroAdd = vetorDois[i]
      vetorIntercalado.push(numeroAdd)

    }

    alert()