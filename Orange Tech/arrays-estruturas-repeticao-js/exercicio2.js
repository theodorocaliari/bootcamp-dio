/* crie um programa que seja capas de percorrer uma lista de numeros e imprima cada numero par encontrado*/

const numerosPares = [];

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    numerosPares.push(i);
  }
}

console.log(numerosPares);
