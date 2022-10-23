/*
Faca um programa para calcular o valor de uma viagem.

voce tera 5 variaveis, sendo elas:
preco etanol
preco gasolina
tipo de combustivel que esta no seu carro
gasto medio de combustivel do carro por km
distancia em km da viagem

imprima no console o valor que sera gasto para realizar a viagem

*/

const precoEtanol = 4;
const precoGasolina = 6;
const distanciaEmKm = 100;
const kmPorLitro = 8;
const tipoCombustivel = 1; //0 gasolina // 1 etanol

const litrosConsumidos = distanciaEmKm / kmPorLitro;

const valorTotal = litrosConsumidos * (tipoCombustivel === 1) ? precoEtanol : precoGasolina;

console.log(valorTotal.toFixed(2))
