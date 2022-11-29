const lado = 9;

function calculaAreaCircunferencia(raio) {
  const PI = Math.PI;
  return 2 * PI * Math.pow(raio, 2);
}

function alturaTrianguloEquilatero(lado) {
  const sen60 = Math.sin(60);
  const altura = lado * sen60;

  return altura;
}

function raioCircCircunscrita(altura) {
  const raioCirc = altura / 3 - altura;
  return raioCirc;
}

function raioCircInscrita(lado) {}

function perimetroTriangulo(lado) {
  return 3 * lado;
}

const altura = alturaTrianguloEquilatero(lado);
const raioCirc = raioCircCircunscrita(altura);
console.log(altura);
console.log(raioCirc);

console.log(calculaAreaCircunferencia(raioCirc).toFixed());
console.log(alturaTrianguloEquilatero(lado).toFixed());
console.log(perimetroTriangulo(lado));
