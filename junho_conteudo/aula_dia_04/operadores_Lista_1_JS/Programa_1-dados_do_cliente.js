/*Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. 
Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". 
Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis. */

let nomePessoa, nacionalidade, endereco
let idade

nomePessoa = prompt('Digite seu nome: ')
idade = Number(prompt('Digite sua idade: '))
nacionalidade = prompt('Digite sua nacionalidade: ')
endereco = prompt('Digite seu endereço: ')

alert('Cliente ' + nomePessoa + ', com ' + idade + ' anos, ' + nacionalidade + ', reside no endereço ' + endereco)