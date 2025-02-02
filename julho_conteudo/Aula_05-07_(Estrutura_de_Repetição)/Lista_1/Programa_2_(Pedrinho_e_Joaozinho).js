/*2) Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano. 
Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho. */

    let joaoAltura = 1.75
    let pedroAltura = 1.60
    let contador = 0
    let crescimentoPedro = 0.03
    let crescimentoJoao = 0.01

    while(pedroAltura < joaoAltura){

       pedroAltura = pedroAltura + crescimentoPedro
       joaoAltura = joaoAltura + crescimentoJoao
       contador = contador + 1

        if (pedroAltura > joaoAltura){

          alert('Se Joãozinho mede 1,75m e cresce 1cm por ano, e Pedrinho tem 1,60m de altura e cresce 3cm por ano')    
          alert('Pedrinho será mais alto que Joãozinho em ' + contador + ' anos.')
        }

    }
