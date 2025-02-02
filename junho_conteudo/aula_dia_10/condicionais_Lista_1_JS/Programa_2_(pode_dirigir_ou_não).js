/*Crie uma programa que verifique se uma pessoa pode dirigir. 
Deve ser perguntada a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), 
exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir".*/

let idadePessoa

 alert('Bem vinda(o)')
 idadePessoa = Number(prompt('Digite sua idade: '))

 if(idadePessoa >= 18){

 alert('Você tem ' + idadePessoa + ' anos,' + ' portanto pode dirigir!')

 }else{

 alert('Você tem ' + idadePessoa + ' anos, ' + 'portanto ainda não pode dirigir!')

 }