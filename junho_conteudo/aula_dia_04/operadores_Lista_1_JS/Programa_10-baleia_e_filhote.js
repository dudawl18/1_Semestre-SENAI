/*As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.*/

let baleiaReproAnos = 4
let baleiaVidaMedia = 200 
let totalFilhotesVida
let mediaFilhotesDecada
let decadaAnos = 10

totalFilhotesVida = baleiaVidaMedia / baleiaReproAnos
mediaFilhotesDecada = decadaAnos / baleiaReproAnos

alert('Total de filhotes ao longo da vida: ' + totalFilhotesVida)
alert('Média de filhotes por década: ' + mediaFilhotesDecada)