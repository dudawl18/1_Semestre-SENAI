/*5) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 7 anos de idade
  - "Infantil B" de 8 a 10 anos de idade
  - "Juvenil A" de 11 a 13 anos de idade
  - "Juvenil B" de 14 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais*/

  let idadeNadador

  alert('Bem vinda(o)')
  idadeNadador = Number(prompt('Digite a sua idade:'))

     switch(true){

        case idadeNadador >= 5 && idadeNadador <= 7:
         alert('Você tem ' + idadeNadador + ' anos. Portanto faz parte da categoria "Infantil A"')
        break

        case idadeNadador >= 8 && idadeNadador <= 10:
        alert('Você tem ' + idadeNadador + ' anos. Portanto faz parte da categoria "Infantil B"')
        break

        case idadeNadador >= 11 && idadeNadador <= 13:
         alert('Você tem ' + idadeNadador + ' anos. Portanto faz parte da categoria "Juvenil A"')
        break

        case idadeNadador >= 14 && idadeNadador <= 17:
         alert('Você tem ' + idadeNadador + ' anos. Portanto faz parte da categoria "Juvenil B"')
        break

        case idadeNadador >= 18:
         alert('Você tem ' + idadeNadador + ' anos. Portanto faz parte da categoria "Senior"')
        break
    
    }