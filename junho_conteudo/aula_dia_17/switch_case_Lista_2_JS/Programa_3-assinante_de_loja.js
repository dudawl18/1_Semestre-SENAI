/*3) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
 A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 
 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. 
 Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). 
 Mostrar na tela o valor da compra de acordo com a opção escolhida.*/

 let frete = 12.50
 let valorCompra
 let categoriaEscolhida
 let valorSemFrete
 let valorDoDesconto
 let valorFinal
 let opcaoUmDoisDesconto = 20
 let opcaoTresDesconto = 10

 alert('Bem vinda(o)')
 valorCompra = parseFloat(prompt('Digite o valor da sua compra: (R$)'))
 categoriaEscolhida = parseInt(prompt('Escolha um dos três benefícios:\n\n(1) Assinante Premium, ganha 20% de desconto e frete grátis\n(2) Assinante Gold, ganha 20% de desconto mas paga frete\n(3) Assinante Silver, ganha 10% de desconto mas paga frete.\n(4) Não assinante, sem benefícios. '))

     switch(true){

        case categoriaEscolhida == 1:
         valorDoDesconto = (valorCompra * opcaoUmDoisDesconto) / 100  // descobrir o desconto em reais
         valorFinal = valorCompra - valorDoDesconto                   // descontando em reais da compra
         alert('Você escolheu "Assinante Premium".\nCom o desconto de 20%, o valor final da compra foi de: R$' + valorFinal)
        break

        case categoriaEscolhida == 2:
         valorDoDesconto = (valorCompra * opcaoUmDoisDesconto) / 100   // descobrir o desconto em reais
         valorSemFrete = valorCompra - valorDoDesconto               // descontando em reais da compra
         valorFinal = valorSemFrete + frete                         // adicionando o valor do frete na compra
         alert('Você escolheu "Assinante Gold".\nCom o desconto de 20% e frete cobrado, o valor final da compra foi de: R$' + valorFinal)
        break

        case categoriaEscolhida == 3:
         valorDoDesconto = (valorCompra * opcaoTresDesconto) / 100  //descobrir o desconto em reais
         valorSemFrete = valorCompra - valorDoDesconto              // descontando em reais da compra
         valorFinal = valorSemFrete + frete                         // adicionando o valor do frete na compra
         alert('Você escolheu "Assinante Silver".\nCom o desconto de 10% e frete cobrado, o valor final da compra foi de: R$' + valorFinal)
        break

        case categoriaEscolhida == 4:
         valorFinal = valorCompra + frete      // adicionando o valor do frete na compra
         alert('Você não é assinate, portanto não possui benefícios.\nO valor final da compra foi de: R$' + valorFinal)
        break

        default:

    alert('Digite uma escolha válida!')
    break
 }