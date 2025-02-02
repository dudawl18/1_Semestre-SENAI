/*O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. 
Criar um sistema utilizando estrutura condicional IF/ELSE IF/ELSE, que receba os dados do candidato (nome, idade, formação e cidade) 
para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. 
Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

Vaga para Equipe de Resgate -> O candidato deve ter de 18 a 60 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
Vaga para Equipe de Tratamento -> O candidato deve ter de 23 a 65 anos, possuir formação em "Veterinária" e residir em Florianópolis.


Critérios de avaliação:

(1,0) Receber e armazenar os dados do candidato.
(1,5) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer.
(0,5) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer".*/

 let nomePessoa
 let idadePessoa
 let formacao
 let cidade

 alert('Bem vinda(o) ao processo seletivo do CETAS')

 nomePessoa = prompt('Digite o seu nome:')
 idadePessoa = Number(prompt('Digite a sua idade:'))
 formacao = prompt('Digite a sua formação:')
 cidade = prompt('Digite a cidade onde você mora:')

 if(idadePessoa >=18 && idadePessoa <= 60 && formacao == 'Biologia' || formacao == 'Ecologia' && cidade == 'Florianópolis'){

 alert(nomePessoa + ', você está apto a concorrer a vaga para Equipe de Resgate!')

 }else if(idadePessoa >= 23 && idadePessoa <=65 && formacao == 'Veterinária' && cidade == 'Florianópolis'){

 alert(nomePessoa + ', você está apto a concorrer a vaga para Equipe de Tratamento!')

 }else{

 alert('Você não está apto a concorrer a nenhuma das vagas oferecidas')

 }