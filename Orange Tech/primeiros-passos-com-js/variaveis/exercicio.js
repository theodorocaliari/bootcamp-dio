//faca um programa para calcular o valor gasto de combustivel em uma viagem
//voce tera 3 variaveis, preco combustivel, gasto do carro, distancia
//imprimir no console o valor gasto de combustivel para realizar a viagem
//https://www.youtube.com/watch?v=Koq_6Z_oRBc//

const precoCombustivel = 5.8;
const kmPorLitro = 8;
const distanciaEmKm = 100;
let valorViagem = 0;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
valorViagem = Math.round(litrosConsumidos * precoCombustivel);

console.log(valorViagem);