/*1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. 
O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar).
Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

 let moeda 
 let quantidadeMoeda
 let totalMoedaUm, totalMoedaCinco, totalMoedaDez, totalMoedaVinCinco, totalMoedaCinquenta
 let totalAcumulado
 let contador = 0   // quantidade de cada tipo de moeda que foi inserida

  alert('Bem vinda(o) ao sistema de cofre porquinho')

    do{

      moeda = parseInt(prompt('Escolha um valor de moeda que deseja armazenar em seu cofrinho:\n\n0)Encerrar\n1) 1 centavo.\n2) 5 centavos.\n3) 10 centavos.\n4) 25 centavos.\n5) 50 centavos.'))

      quantidadeMoeda = parseInt(prompt('Digite a quantidade de moedas dessa moeda: '))

        switch(moeda){

            case 1:

              totalMoedaUm = quantidadeMoeda * 0.1
            
              
            break

            case 2:

             totalMoedaCinco = quantidadeMoeda * 0.5
          
             
            break
        
            case 3:

             totalMoedaDez = quantidadeMoeda * 0.10
        
             
            break

            case 4:

             totalMoedaVinCinco = quantidadeMoeda * 0.25
      
             
            break

            case 5:

             totalMoedaCinquenta = quantidadeMoeda * 0.50
    
             
            break
        
        }

    }while(moeda != 0){

        alert('Total de moedas de 1 centavo: ' + )

        alert('Total de moedas de 5 centavo: ' + )

        alert('Total de moedas de 10 centavo: ' + )

        alert('Total de moedas de 25 centavo: ' + )

        alert('Total de moedas de 50 centavo: ' + )

       totalAcumulado = totalMoedaUm + totalMoedaCinco + totalMoedaDez + totalMoedaVinCinco + totalMoedaCinquenta

       alert('Total de moedas de 50 centavo: ' + )
    }