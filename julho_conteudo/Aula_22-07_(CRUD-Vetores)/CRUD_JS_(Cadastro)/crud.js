/*CRUD simples com JavaScript*/

 let vetorUsernames = []
 let opDigitada 
 let userAdd, userExcluir, userEditar, userNovo
 let posicaoUser
 
    alert('Bem vinda(o)')

    do{

     opDigitada = parseInt(prompt(`⭐ Menu CRUD ⭐\n\n1) Cadastrar\n2) Editar\n3) Excluir\n 4) Listar\n 5) Sair\n\nEscolha uma das opçoes acima`))

        switch (opDigitada) {
            
            case 1:
              userAdd = prompt('Digite o nome do usuário a cadastrar: ')
              vetorUsernames.push(userAdd)
              alert('Usuário cadastrado!!')
              console.table(vetorUsernames)
            break

            case 2:
                userExcluir = prompt('Digite o nome de usário a editar: ')
                posicaoUser = vetorUsernames.indexOf(userEditar)
                userNovo = prompt('Digite o novo nome de usuário: ')
                vetorUsernames.splice(posicaoUser, 1, userNovo)

                //sem splice
                //vetorUsernames[posicaoUser] = userNovo

              alert('Usuário editado')  
              console.table(vetorUsernames)
            break

            case 3:
              userExcluir = prompt('Digite o nome de usário a excluir: ')
              posicaoUser = vetorUsernames.indexOf(userExcluir)
              vetorUsernames.splice(posicaoUser, 1)
              alert('Usuário excluído!')  
            break

            case 4:
                alert(`🎉Usuários Cadastrados🎉\n\n${vetorUsernames}`)
            break

            case 5:
              alert('Você saiu')  
            break
        
            default:
             alert('Opção inválida!!')

        }


    }while(opDigitada != 5){




    }