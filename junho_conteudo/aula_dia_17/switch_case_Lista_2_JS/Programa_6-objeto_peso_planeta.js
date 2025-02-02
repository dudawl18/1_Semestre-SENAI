/*6) Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo 
e pedir ao usuário para digitar o número desejado para escolher outros lugares do sistema solar. 
Ao final mostrar, o peso desse objeto no lugar selecionado. Lista de locais (lua e planetas) e gravidades relativas à Terra:
1 - 0,06 Plutão
2 - 0,17 Lua
3 - 0,38 Mercúrio
4 - 0,38 Marte
5 - 0,91 Vênus
6 - 0,92 Urano
7 - 1,06 Saturno
8 - 1,19 Netuno
9 - 2,34 Júpiter*/

 let pesoObjetoTerra
 let numeroDesejado
 let conversaoFinal

 alert('Bem vinda(o)')
 pesoObjetoTerra = Number(prompt('Digite o peso do objeto escolhido da Terra:'))
 numeroDesejado = Number(prompt('Lista com a gravidade de planetas e Lua: \n\n1) 0,06 Plutão\n2) 0,17 Lua\n3) 0,38 Mercúrio\n4) 0,38 Marte\n5) 0,91 Vênus\n6) 0,92 Urano\n7) 1,06 Saturno\n8) 1,19 Netuno\n9) 2,34 Júpiter\n\nPara escolher outra gravidade, digite uma das alternativas indicadas'))

     switch(numeroDesejado){

        case 1:
         conversaoFinal = pesoObjetoTerra * 0.06
         alert('O peso desse objeto em Plutão é ' + conversaoFinal + ' kg')
        break

        case 2:
         conversaoFinal = pesoObjetoTerra * 0.17
         alert('O peso desse objeto na Lua é ' + conversaoFinal + ' kg')
        break

        case 3:
         conversaoFinal = pesoObjetoTerra * 0.38
         alert('O peso desse objeto em Mercúrio é ' + conversaoFinal + ' kg')
        break

        case 4:
         conversaoFinal = pesoObjetoTerra * 0.38
         alert('O peso desse objeto em Marte é ' + conversaoFinal + ' kg')
        break

        case 5:
         conversaoFinal = pesoObjetoTerra * 0.91
         alert('O peso desse objeto em Vênus é ' + conversaoFinal + ' kg')
        break

        case 6:
         conversaoFinal = pesoObjetoTerra * 0.92
         alert('O peso desse objeto em Urano é ' + conversaoFinal + ' kg')
        break

        case 7:
         conversaoFinal = pesoObjetoTerra * 1.06
         alert('O peso desse objeto em Saturno é ' + conversaoFinal + ' kg')
        break

        case 8:
         conversaoFinal = pesoObjetoTerra * 1.19
         alert('O peso desse objeto em Netuno é ' + conversaoFinal + ' kg')
        break
   
        case 9:
         conversaoFinal = pesoObjetoTerra * 2.34
         alert('O peso desse objeto em Júpiter é ' + conversaoFinal + ' kg')
        break   

        default:

        alert('Número inválido. Digite um número entre 1 e 9!')
        break

    }