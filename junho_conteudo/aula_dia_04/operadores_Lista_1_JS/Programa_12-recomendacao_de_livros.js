/*Um programa de recomendação de livros baseado nos interesses do usuário. 
O sistema deve solicitar ao usuário seus gêneros literários favoritos e, em seguida, sugerir uma lista de livros que podem ser do seu interesse.*/

let generosFavoritos

 alert(`Bem vinda(o)`)

 generosFavoritos = prompt('Dentre os gêneros disponíveis, qual é o seu favorito?\n\n-Terror\n-Fantasia\n-Drama\n-Romance')

     if(generosFavoritos == `Terror`){

     alert(`Aqui está uma lista de livros do gênero escolhido:\n\n-O Iluminado\n-O Vilarejo\n-Carrie\n-O Bebê de Rosemary`)

    }

         else if(generosFavoritos == `Fantasia`){

         alert(`Aqui está uma lista de livros do gênero escolhido:\n\n-O Castelo Animado\n-O Hobbit\n-Percy Jackson\n-Coraline`)
  
        }
        
             else if(generosFavoritos == `Drama`){

             alert(`Aqui está uma lista de livros do gênero escolhido:\n\n-Hamlet\n-A Menina que Roubava Livros\nCrime e Castigo\n-Os Miseráveis`)
          
            }

                 else if(generosFavoritos == `Romance`){

                 alert(`Aqui está uma lista de livros do gênero escolhido:\n\n-Drácula\n-Orgulho e Preconceito\n-A Culpa É das Estrelas\n-Dom Casmurro`)
              
 }else {
                    
 alert('Selecione um gênero disponível!')

 }