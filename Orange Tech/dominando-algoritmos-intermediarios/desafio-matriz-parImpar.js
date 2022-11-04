/*function ordenaLista() {
  //console.log(arguments);

  let numeros = [[], []];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (arguments[i][j] % 2 == 0) {
        numeros[0].push(arguments[i][j]);
      } else {
        numeros[1].push(arguments[i][j]);
      }
    }
  }
  let organizado = numeros[0] + "," + numeros[1];
  return organizado.split(",").join(", ");
}*/

arr = [6, 4, 3, 8, 5];

let arrVazio = [];

arr.forEach((el) => (el % 2 == 0 ? arrVazio.unshift(el) : arrVazio.push(el)));

console.log(arrVazio);

//console.log(ordenaLista([5, 1, 2, 4, 7, 9], [4, 3, 1, 2], [6, 4, 3, 8, 5]));
