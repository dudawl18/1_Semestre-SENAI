/*1) Criar um sistema (de acordo com a imagem) onde o usuário digite seu peso e altura, 
seja calculado o IMC (peso / altura * altura). Mostrar no campo de IMC o valor do IMC com duas casas após a vírgula,
 e no campo resultado o resultado de acordo com a tabela abaixo.

IMC menor que 15 -> "Muito abaixo do Peso"
IMC igual ou maior que 15 e menor que 18 -> "Abaixo do Peso"
IMC igual ou maior que 18 e menor que 25 -> "Peso Adequado"
IMC igual ou maior que 25 e menor que 28 -> "Acima do Peso"
IMC igual ou maior que 28 -> "Muito acima do Peso"*/

  let pesoUsuario = document.getElementById('peso')
  let alturaUsuario = document.getElementById('altura')
  let imcUsuario = document.getElementById('imc')
  let resultadoTabela = document.getElementById('resultado')
  let contaIMC

    function Calculo(){

     contaIMC = Number(pesoUsuario.value) / (Number(alturaUsuario.value) * Number(alturaUsuario.value))

     imcUsuario.value = contaIMC.toFixed(2)

        if(contaIMC < 15){

          resultadoTabela.value = "Muito abaixo do Peso"

        }

        else if(contaIMC >= 15 && contaIMC < 18){

          resultadoTabela.value = "Abaixo do Peso"

        }

        else if(contaIMC >= 18 && contaIMC < 25){

          resultadoTabela.value = "Peso Adequado"

        }

        else if(contaIMC >= 25 && contaIMC < 28){

          resultadoTabela.value = "Acima do Peso"

        }

        else if(contaIMC >= 28){

        resultadoTabela.value = "Muito acima do Peso"

        }
        
    }