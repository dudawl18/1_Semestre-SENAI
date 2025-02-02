 /*3) Programar um sistema onde o usuário preencha 5 números (inputs) 
 com um botão que verifica se os números são pares ou ímpares.
 Caso algum número não seja preenchido, mostrar "Indefinido".*/

 let numUmDigitado = document.getElementById('primeiroNumero')
 let numDoisDigitado = document.getElementById('segundoNumero')
 let numTresDigitado = document.getElementById('terceiroNumero')
 let numQuatroDigitado = document.getElementById('quartoNumero')
 let numCincoDigitado = document.getElementById('quintoNumero')
 let resultadoNumUm = document.getElementById('resultadoUm')
 let resultadoNumDois = document.getElementById('resultadoDois')
 let resultadoNumTres = document.getElementById('resultadoTres')
 let resultadoNumQuatro = document.getElementById('resultadoQuatro')
 let resultadoNumCinco = document.getElementById('resultadoCinco')

    function Verificador(){

        if(Number(numUmDigitado.value) % 2 === 0){

            resultadoNumUm.value = "Par"
           
        }else{

            resultadoNumUm.value = "Ímpar"

        }

        if(numUmDigitado.value === ''){

            resultadoNumUm.value = "Indefinido"

        }
  
        if(Number(numDoisDigitado.value) % 2 === 0){
  
            resultadoNumDois.value = "Par"
             
        }else{

            resultadoNumDois.value = "Ímpar"

        }

        if(numDoisDigitado.value === ''){

            resultadoNumDois.value = "Indefinido"

        }
  
        if(Number(numTresDigitado.value) % 2 === 0){
  
            resultadoNumTres.value = "Par"
             
        }else{

            resultadoNumTres.value = "Ímpar"

        }

        if(numTresDigitado.value === ''){

            resultadoNumTres.value = "Indefinido"

        }
  
        if(Number(numQuatroDigitado.value) % 2 === 0){
  
            resultadoNumQuatro.value = "Par"
             
        }else{

            resultadoNumQuatro.value = "Ímpar"

        }

        if(numQuatroDigitado.value === ''){

            resultadoNumQuatro.value = "Indefinido"

        }
  
        if(Number(numCincoDigitado.value) % 2 === 0){
  
            resultadoNumCinco.value = "Par"
             
        }else{

            resultadoNumCinco.value = "Ímpar"

        }
  
        if(numCincoDigitado.value === ''){

            resultadoNumCinco.value = "Indefinido"

        }


    }