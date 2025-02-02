let elementoInputUser = document.getElementById('inputUsername')
let elementolabelLista = document.getElementById('Lbl_lista')
let vetorUsername = []
   
   function Cadastro(){

      vetorUsername.push(elementoInputUser.value)
      alert('Usuário Cadastrado')
      elementoInputUser.value = ''  //limpa o input
      Listar()

    }

    function Edita(){

        alert('Editou')
  
    }

    function Exclui(){

        alert('Excluiu')
  
    }

    function Listar(){

        elementolabelLista.innerHTML = vetorUsername
  
    }