/*5) Criar um sistema de comparação de carros, de acordo com a imagem. 
Devem ser digitadas notas de 0 a 10 para os 3 critérios (conforto, economia, design) de cada carro, 
o que irá gerar uma média com duas casas após a vírgula. Ao clicar em comparar, 
devem ser mostradas a médias de cada carro e o melhor carro (carro com melhor média) nos respectivos campos.*/

 let confortoCarroUm = document.getElementById('confortoUm')
 let economiaCarroUm = document.getElementById('economiaUm')
 let designCarroUm = document.getElementById('designUm')
 let confortoCarroDois = document.getElementById('confortoDois')
 let economiaCarroDois = document.getElementById('economiaDois')
 let designCarroDois = document.getElementById('designDois')
 let confortoCarroTres = document.getElementById('confortoTres')
 let economiaCarroTres = document.getElementById('economiaTres')
 let designCarroTres = document.getElementById('designTres')
 let mediaCarroUm = document.getElementById('mediaUm')
 let mediaCarroDois = document.getElementById('mediaDois')
 let mediaCarroTres = document.getElementById('mediaTres')
 let resultadoFinal = document.getElementById('melhorCarro')
 let mediaUmConta, mediaDoisConta, mediaTresConta

    function Comparacao(){

     mediaUmConta = (Number(confortoCarroUm.value) + Number(economiaCarroUm.value) + Number(designCarroUm.value)) / 3
     mediaDoisConta = (Number(confortoCarroDois.value) + Number(economiaCarroDois.value) + Number(designCarroDois.value)) / 3
     mediaTresConta = (Number(confortoCarroTres.value) + Number(economiaCarroTres.value) + Number(designCarroTres.value)) / 3

     mediaCarroUm.value = mediaUmConta.toFixed(2)
     mediaCarroDois.value = mediaDoisConta.toFixed(2)
     mediaCarroTres.value = mediaTresConta.toFixed(2)

        if(mediaUmConta > mediaDoisConta && mediaUmConta > mediaTresConta){

          resultadoFinal.value = "Carro 1"

        }
        
        else if(mediaDoisConta > mediaUmConta && mediaDoisConta > mediaTresConta){

          resultadoFinal.value = "Carro 2"

        }
        
        else if(mediaTresConta > mediaUmConta && mediaTresConta > mediaDoisConta){

          resultadoFinal.value = "Carro 3"

        }

        else{

          resultadoFinal.value = "Mesma Média"

        }



    }