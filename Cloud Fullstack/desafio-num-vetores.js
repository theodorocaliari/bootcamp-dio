/*
Desafio
Faça um Programa que leia cinco números inteiros e armazene-os em um vetor chamado VETOR. Armazene os números pares no vetor PAR e os números ímpares no vetor IMPAR. 

Entrada 
Peça ao usuário que insira o valor de cinco números inteiros. 

Saída
Imprima os valores dos três vetores um em cada linha mostrando na primeira linha, os valores no Vetor, na segunda linha os valores Par(es) e na terceira linha os valores ímpares Impar(es). Conforme o exemplo a baixo.  

 ENTRADA 
3,4,6,9,10

SAÍDA 

Vetor: 3,4,6,9,10
Par(es): 4,6,10
Impar(es): 3,9

 ENTRADA 
4,6,10,20,18

SAÍDA 
Vetor: 4,6,10,20,18
Par(es): 4,6,10,20,18
Impar(es):
 

 ENTRADA 
3,9,7,11,21

SAÍDA 
Vetor: 3,9,7,11,21
Par(es):
Impar(es): 3,9,7,11,21
*/

let vetor = [];
let pares = [];
let impares = [];

let numerosUsuario = [3, 4, 6, 9, 10];

for (let i = 0; i < 5; i++) {
  let num = numeroUsuario[i];
  vetor.push(num);
}

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    pares.push(vetor[i]);
  } else {
    impares.push(vetor[i]);
  }
}

console.log(`Vetor: ${vetor}`);

console.log(`Par(es): ${pares}`);
console.log(`Impar(es): ${impares}`);
