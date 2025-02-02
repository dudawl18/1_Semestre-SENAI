/*Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário escolha o filme, o horário e o número de ingressos desejados. 
Após a seleção, deve ser exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do ingresso devem ser pré-definidos*/

let quantidadeIngresso
let valorIngresso = 13
let filmeEscolhido
let horarioEscolhido
let totalParaPagar

 alert('Seja bem-vinda(o) ao cinema')
 alert('O ingresso está custando 13 reais cada')

 filmeEscolhido = prompt('Os filmes disponíveis são: \n\n-O Menino e a Garça\n-Duna 2\n-Barbie\n\nQual foi o filme escolhido? ')


 //filme 1

  if(filmeEscolhido == 'O Menino e a Garça'){

 horarioEscolhido = prompt('Horários disponíveis: \n\n14:30 - 2D\n17:00 - 2D\n\nQual foi o horário escolhido? ')

 }else if(horarioEscolhido == '14:30' || horarioEscolhido == '17:00'){

 quantidadeIngresso = Number(prompt('Quantos ingressos vão ser comprados? '))

 totalParaPagar = quantidadeIngresso * valorIngresso

 alert('O total a ser pago será de: R$ ' + totalParaPagar )

} 

//filme 2

  if(filmeEscolhido == "Duna 2"){

horarioEscolhido = prompt('Horários disponíveis: \n\n20:00 - 3D\n22:30 - 3D\n\nQual foi o horário escolhido? ')

} if(horarioEscolhido == '20:00' || horarioEscolhido == '22:30'){

    quantidadeIngresso = Number(prompt('Quantos ingressos vão ser comprados? '))
   
    totalParaPagar = quantidadeIngresso * valorIngresso
   
    alert('O total a ser pago será de: R$ ' + totalParaPagar )

}

    //filme 3

     if(filmeEscolhido == "Barbie"){

    horarioEscolhido = prompt('Horários disponíveis: \n\n16:00 - 2D\n18:40 - 2D\n\nQual foi o horário escolhido? ')
    
    } if(horarioEscolhido == '16:00' || horarioEscolhido == '18:40'){
    
        quantidadeIngresso = Number(prompt('Quantos ingressos vão ser comprados? '))
       
        totalParaPagar = quantidadeIngresso * valorIngresso
       
        alert('O total a ser pago será de: R$ ' + totalParaPagar )

    } 

    else if(filmeEscolhido != 'O Menino e a Garça' && filmeEscolhido != 'Duna 2' && filmeEscolhido != 'Barbie'){
    
        alert('Filme selecionado inválido.')
    
     }

       else if(horarioEscolhido != '14:30' &&  horarioEscolhido != '17:00' && horarioEscolhido != '20:00' &&  horarioEscolhido != '22:30' && horarioEscolhido != '16:00' &&  horarioEscolhido != '18:40'){

      alert('Horário indisponível! Selecione um horário válido')

       }

       