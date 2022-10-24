/*
  uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100;
  faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

*/

const { gets, prints } = require("./exercicio-auxiliares");

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}

prints(maiorValorEncontrado);
