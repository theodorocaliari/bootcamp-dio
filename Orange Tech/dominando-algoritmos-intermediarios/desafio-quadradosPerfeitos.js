/**
 * Desafio  
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

Entrada
A entrada consiste em um número inteiro n, representando o valor total. 

Saída
A saída consiste em retornar o menor número de números quadrados perfeitos. 

ENTRADA           SAÍDA 
12                3 
13                2 
10                2 


const numSquares = n => {
  if (n < 3) return n;
  
  let best = Infinity;
  
  for (let x = 2; x <= Math.floor(Math.sqrt(n)); ++x) {
      let k = Math.floor(n / (x * x));
      best = Math.min(best, k + numSquares(n - k * x * x));
  }
  return best;
};

console.log(numSquares(n))

 */

function menorQuardadoPerfeito(n) {
  //quadrado de um numero é encontrado pela multiplicação do seu antecessor com seu sucessor e somado um
  //numero² = (numero - 1) * (numero + 1) + 1;

  console.log((n - 1) * (n + 1) + 1);
  let regressivo = n;
  for (let i = 0; i <= n; i++) {
    // if (Number.isInteger(Math.sqrt(i))) {
    //   inteiro += i;
    //   console.log(n === inteiro + inteiro + 1);
    // }

    console.log(Number.isInteger(Math.sqrt(i)) + Number.isInteger(Math.sqrt(regressivo)) === n);

    regressivo--;
    //console.log(Number.isInteger(Math.sqrt(i)));
    //console.log(inteiro);
  }
}

let n = 10; //2
//n = 13; / / 2;
//n = 12; //3

console.log(menorQuardadoPerfeito(n));
/*
x + y = 12

0+12
1+11
2+10
3+9
4+8
5+7
6+6
7+5
8+4
9+3
10+2
11+1
12+0



0+13
1+12
2+11
3+10
4+9
5+8
7+6
8+5
9+4
10+3
11+2
12+1
13+0
*/
