/* 2) Crie um programa que solicite a senha de um usuário e depois, 
peça pra digitar novamente até que as duas senhas sejam correspondentes.*/

let senhaDefinida
let tentativaSenha
let contador = 0

   alert('Bem vinda(o)')
   senhaDefinida = parseInt(prompt('Digite uma senha: '))

    while(senhaDefinida != tentativaSenha){

      tentativaSenha = parseInt(prompt('Confirme sua senha: '))

      contador++

        if(tentativaSenha == senhaDefinida){

           alert('Senha correta!')

        }
    }