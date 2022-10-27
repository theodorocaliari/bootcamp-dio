/*
Desafio
O fatorial de um número inteiro positivo N é o produto de todos os inteiros 
positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os 
inteiros em ordem decrescente, trocando as operações de multiplicação por uma 
rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'.
Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se 
que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual 
de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um 
número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial 
desajeitado de n.

Entrada
A entrada consiste em um valor inteiro positivo N.

Saída
A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

Exemplo 1:
Entrada	    Saída
4	        7
Explicação: 7 = 4 * 3 / 2 + 1 

Exemplo 2:
Entrada	    Saída
10	        12
Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
*/

console.log(Math.round((10 * 9) / 8 + 7 - (6 * 5) / 4 + 3 - 2 * 1));
const entrada = 10;

function fatorialDesajeitado(entrada) {
  let resultado = 0;
  let indiceOperacoes = 0;
  let retornoOperacao = 0;

  const multiplicar = (n1, n2) => n1 * n2,
    dividir = (n1, n2) => n1 / n2,
    adicionar = (n1, n2) => n1 + n2,
    subtrair = (n1, n2) => n1 - n2;

  const listaOperadores = [multiplicar, dividir, adicionar, subtrair];

  if (entrada === 1 || entrada === 0) {
    return (resultado = 1);
  } else {
    for (let i = entrada; i > 1; i--) {
      if (indiceOperacoes > listaOperadores.length - 1) {
        indiceOperacoes = 0;
      }

      if (indiceOperacoes === 0 && i === entrada) {
        retornoOperacao = Math.round(
          listaOperadores[indiceOperacoes](i, i - 1)
        );
      } else {
        retornoOperacao = Math.round(
          listaOperadores[indiceOperacoes](retornoOperacao, i - 1)
        );
      }

      indiceOperacoes++;
      console.log(
        `indiceOperacoes: ${indiceOperacoes}; i: ${i}; retornoOperacao: ${retornoOperacao}`
      );
    }
  }
}
//12*11/9+8-7*6/5+4-3*2/1
fatorialDesajeitado(entrada);
//console.log(fatorialDesajeitado(entrada));
