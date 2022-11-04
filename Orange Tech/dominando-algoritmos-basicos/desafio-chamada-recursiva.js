/*
Descrição
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

Entrada
A Entrada será composta por um número inteiro, N. 

Saída
Será  impresso o somatório de N até 0, como no exemplo a baixo: 

ENTRADA       SAÍDA
10	          55
4	            10
15	          120
*/

function somatorio(n) {
  let soma = 0;
  for (let i = n; i > 0; i--) {
    soma += i;
  }

  return soma;
}

console.log(somatorio(n));
