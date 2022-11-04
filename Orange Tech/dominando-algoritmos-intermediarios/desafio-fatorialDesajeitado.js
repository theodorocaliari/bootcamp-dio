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



entradas teste:4,7,10,12
*/

/*resposta - https://medium.com/@yy929058/leetcode-1006-clumsy-factorial-1b756a76b88 */

function fatorialDesajeitado(valorEntrada) {
  let count = 1;
  let tempSum = 0;
  let res = 0;
  for (let i = valorEntrada; i > 0; i--) {
    i = i;
    let mod = count % 4;
    switch (mod) {
      case 1:
        tempSum = i;
        break;
      case 2:
        tempSum *= i;
        break;
      case 3:
        tempSum /= i;
        break;
      default:
        res = res + i + (count === 4 ? tempSum : -tempSum);
        tempSum = 0;
        break;
    }
    count += 1;
  }
  return Math.round(res + (valorEntrada < 4 ? tempSum : -tempSum));
}

const entrada = 10;
console.log(fatorialDesajeitado(entrada));
