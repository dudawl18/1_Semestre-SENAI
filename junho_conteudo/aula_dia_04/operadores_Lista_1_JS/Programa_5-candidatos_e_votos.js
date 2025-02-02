/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
Em seguida o número de votos do candidato X, o número de votos do candidato Y, 
total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

let numeroTotalEleitores
let candidatoX, candidatoY
let votosTotaisBrancos, votosTotaisNulos
let somaVotos
let percentualVotosNulos, percentualVotosBrancos, percentualCandidatoX, percentualCandidatoY

 numeroTotalEleitores = Number(prompt('Digite o número total de eleitores: ')) 

 candidatoX = Number(prompt('Digite o número de votos do candidato X: '))

 candidatoY = Number(prompt('Digite o número de votos do candidato Y: '))

 votosTotaisBrancos = Number(prompt('Digite o número total de votos brancos: '))

 votosTotaisNulos = Number(prompt('Digite o número total de votos nulos: '))

 somaVotos = candidatoX + candidatoY + votosTotaisBrancos + votosTotaisNulos

 percentualVotosNulos = votosTotaisNulos * 100 / numeroTotalEleitores
 percentualVotosBrancos = votosTotaisBrancos * 100 / numeroTotalEleitores
 percentualCandidatoX = candidatoX * 100 / numeroTotalEleitores
 percentualCandidatoY = candidatoY * 100 / numeroTotalEleitores

     if (numeroTotalEleitores != somaVotos){

        alert('O número total de eleitores e votos não corresponde')
     
    }else{

        alert('O percentual votos nulos: ' + percentualVotosNulos + '%')
        alert('O percentual votos brancos: ' + percentualVotosBrancos + '%')
        alert('O percentual votos nulos : ' + candidatoX + '%')
        alert('O percentual votos nulos : ' + candidatoY + '%')
   

     

    }