/*
elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha da condicao de pagamento.
utilize a tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar o calculo adequado.

condicao de pagamento
1 a vista debito - 10% desconto
2 a vista dinheiro ou pix - 15% desconto
3 em 2x - preco normal
4 acima de 2x - juros de 10%

*/

const precoProduto = 2500;
const modoPagamento = 4; //1, 2, 3, 4
let precoFinal = 0;

if(modoPagamento >= 4){
    precoFinal = precoProduto + (precoProduto * (10/100));
}else if(modoPagamento === 2){
    precoFinal = precoProduto - (precoProduto * (15/100));
}else if(modoPagamento === 1){
    precoFinal = precoProduto - (precoProduto * (10/100));
}else{
    precoFinal = precoProduto;
}

console.log(precoFinal);