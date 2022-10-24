/*
crie uma classe para representar pessoas.
para cada pessoa teremos os atributos, nome, peso e altura.
as pessoas devem ter a cpacidade de dizer o valor do seu imc
instancie uma pessoa chamada jose com 70kg, 1.75 
*/

class Pessoa {
  constructor(nome, peso, altura) {
    (this.nome = nome), (this.peso = peso), (this.altura = altura);
  }
  calculaImc() {
    return Math.round(this.peso / Math.pow(this.altura, 2));
  }
  classificaImc(imc) {
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

  falarImc() {
    return `Meu nome é ${this.nome} eu peso ${this.peso}kg e tenho ${
      this.altura
    }m de altura. Meu IMC é ${this.calculaImc()} que é classificado como ${this.classificaImc(this.calculaImc())}.`;
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.falarImc());
