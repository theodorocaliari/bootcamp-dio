/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor um gasto medio de combustivel por km rodado.
Crie um metodo que dado a quantidade de km e o preco do combustivel, retorne o valor gasto de combustivel para realizar o percurso
*/

class Carro {
  constructor(marca, cor, consumoPorKmRodado) {
    this.marca = marca;
    this.cor = cor;
    this.consumoPorKmRodado = consumoPorKmRodado;
  }

  valorGastoParaViajar(distancia, precoCombustivel) {
    const consumo = distancia * this.consumoPorKmRodado;
    const custoAbastecimento = consumo * precoCombustivel;
    return custoAbastecimento.toFixed(2);
  }
}

const fusca = new Carro("vw", "branco", 1 / 12);
console.log(fusca.valorGastoParaViajar(70, 5));
