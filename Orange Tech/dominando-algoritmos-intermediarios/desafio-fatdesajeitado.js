//const entradas = [4, 7, 8, 10, 11, 12, 13, 15, 21, 25];
const entradas = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

function fatorialDesajeitado(valorDeEntrada) {
  let contador = 1;
  let acumulaResultadoOperacoes = 0;
  let resultado = 0;

  for (let i = valorDeEntrada; i > 0; i--) {
    let mod = contador % 4; //mod conta operaçoes; contador conta iteracoes;
    //console.log(`contador%4: ${contador % 4}`);
    switch (mod) {
      case 1:
        acumulaResultadoOperacoes = i;
        break;
      case 2:
        acumulaResultadoOperacoes *= i;
        break;
      case 3:
        acumulaResultadoOperacoes /= i;
        break;
      default:
        resultado = resultado + i + (contador === 4 ? acumulaResultadoOperacoes : -acumulaResultadoOperacoes);
        acumulaResultadoOperacoes = 0;
        break;
    }
    contador++;
  }

  return Math.round(resultado + (valorDeEntrada <= 4 ? acumulaResultadoOperacoes : -acumulaResultadoOperacoes));
}

for (let i = 0; i < entradas.length; i++) {
  //console.log(`==== ${entradas[i]} ====`);
  let n = entradas[i];
  console.log(`${fatorialDesajeitado(n)}`);
}
