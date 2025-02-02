/*1) Criar um programa onde o usuário digite o ano de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/

 alert('Bem vinda(o)')
 let anoNascimento = Number(prompt('Digite seu ano de nascimento: '))

     switch(true){

        case anoNascimento < 1946:
          alert('Você faz parte dos "Sem Geração"')
        break

        case anoNascimento >= 1946 && anoNascimento < 1965:
          alert('Você faz parte dos "Baby Boomers"')
        break

        case anoNascimento >= 1965 && anoNascimento < 1981:
          alert('Você faz parte da "Geração X"')
        break
 
        case anoNascimento >= 1981 && anoNascimento < 1997:
          alert('Você faz parte da "Geração Y ou Millennials"')
        break

        case anoNascimento >= 1997 && anoNascimento < 2011:
          alert('Você faz parte da "Geração Z"')
        break

        case anoNascimento >= 2011:
          alert('Você faz parte da "Geração Alfa"')
        break

        default:

        alert('Digite um valor válido!')
        break
    }