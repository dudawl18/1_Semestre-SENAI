/*14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose.
 Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta).
  Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, 
  se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" 
  ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".*/

  let nomePaciente
  let intoleGluten
  let intoleLactose
  let respostaAlimentoGluten
  let respostaAlimentoLactose
  let alimentoProibido

  nomePaciente = prompt('Digite o seu nome: ')
  intoleGluten = prompt('Digite se você possui intolerância a glutén (SIM/NÃO): ')
  intoleLactose = prompt('Digite se você possui intolerância a lactose (SIM/NÃO): ')

  prompt('Digite o nome do alimento 1: ')
  respostaAlimentoGluten = prompt('Alimento 1 possui glutén? (SIM/NÃO)')
  respostaAlimentoLactose = prompt('Alimento 1 possui lactose? (SIM/NÃO)')

     if(intoleGluten == 'SIM' && respostaAlimentoGluten == 'SIM' ||
     intoleLactose == 'SIM' && respostaAlimentoLactose == 'SIM'){

     alimentoProibido = true

    }

         if(alimentoProibido == true){

         alert('Dieta inadequada, contém alimentos aos quais o paciente é intolerante!')

         }else{

         alert('Dieta adequada!👍')
 
        }