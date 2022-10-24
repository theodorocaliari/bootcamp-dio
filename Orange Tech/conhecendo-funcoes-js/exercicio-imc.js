function calculaImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(numero) {
  if (imc > 40) {
    return "obesidade grave";
  } else if (imc > 30 && imc < 40) {
    return "obeso";
  } else if (imc > 25 && imc < 30) {
    return "acima do peso";
  } else if (imc > 18.5 && imc < 25) {
    return "peso normal";
  } else {
    return "abaixo do peso";
  }
}

//main
(function main() {
  const peso = 120;
  const altura = 1.8;
  const imc = calculaImc(peso, altura);

  console.log(classificaImc(imc));
})();
