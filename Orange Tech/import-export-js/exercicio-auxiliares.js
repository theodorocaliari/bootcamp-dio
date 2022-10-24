const conjuntoDeEntradas = [5, 50, 10, 98, 23];
let i = 0;

//cada vez que chamamos o get ele retorna o valor do conjunto de entradas
function gets() {
  const valor = conjuntoDeEntradas[i];
  i += 1;
  return valor;
}

function prints(texto) {
  console.log(texto);
}

module.exports = { gets, prints };
