/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

let anoNascimento
let anoAtual
let idadeAnos
let meses = 12
let idadeMeses
let dias = 365
let idadeDias
let idadeSemanas
let diasSemanas = 7
let anoSemana

anoNascimento = Number(prompt('Digite seu ano de nascimento: '))

anoAtual = Number(prompt('Digite o ano atual: '))

idadeAnos = anoAtual - anoNascimento
idadeMeses = idadeAnos * meses
idadeDias = idadeAnos * dias
anoSemana = dias / diasSemanas
idadeSemanas = idadeAnos * anoSemana

alert('A idade em anos ' + idadeAnos + ', idade em meses ' + idadeMeses + ', idade em dias ' + idadeDias + ', idade em semanas ' + idadeSemanas)