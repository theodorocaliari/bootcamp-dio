/*
Desafio
Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

Saída
A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. Caso contrário,  retorne "Nao sao iguais!", sem as aspas.

EXEMPLO DE ENTRADA 

EXEMPLO DE SAÍDA 

1
2

Nao sao iguais!
*/

function checaNumerosIguais(n1, n2) {
  if (n1 === n2) {
    return "Sao iguais!";
  }

  return "Nao sao iguais!";
}

console.log(checaNumerosIguais(1, 2));
