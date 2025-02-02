 /*1) Desenvolva um programa que o usuário digite 10 números positivos e inteiros,  
 ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade.
 (Somatório da primeira metade - Somatório da segunda metade) (DESAFIO: Não pode somar as metades quando estiver pegando os números)*/

 let listaNumeros = []
 let addNumber
 let somaPartUm = 0
 let somaPartDois = 0
 let contaFinal = 0

 alert('Bem vinda(o)')

    for(i=0; i < 10; i++){
 
      listaNumeros.push(parseInt(prompt('Digite 10 números positivos e inteiros: ')))
 
    }

 alert(listaNumeros)

    for (let i = 0; i < 5; i++) {
       somaPartUm += (listaNumeros[i])
        
    }

    for (let i = 5; i < 10; i++) {
        somaPartDois += (listaNumeros[i])
         
    }

  contaFinal = somaPartDois - somaPartUm

  console.table('Resultado final é de: ' + contaFinal)