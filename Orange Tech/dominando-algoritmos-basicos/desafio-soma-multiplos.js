/*
Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

Exemplo 1

Entrada	    Saída
5
20	        50
*/

function desafio1(inicio, fim) {
  let soma = 0;

  for (let i = 0; i <= fim; i++) {
    if (i % inicio === 0) {
      soma += i;
    }
  }

  return soma;
}
