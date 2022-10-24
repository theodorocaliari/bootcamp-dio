class Pessoa {
  constructor(nome, sobrenome, anoNascimento, email) {
    (this.nome = nome),
      (this.sobrenome = sobrenome),
      (this.anoNascimento = anoNascimento),
      (this.email = email),
      (this.idade = this.calculaIdade(this.anoNascimento));
  }

  calculaIdade(anoNascimento) {
    const date = new Date();
    const anoAtual = date.getFullYear();
    return anoAtual - anoNascimento;
  }

  descricao() {
    return `${this.nome} ${this.sobrenome} nasceu em ${this.anoNascimento} e tem ${this.calculaIdade(this.anoNascimento)} anos`;
  }
}

function pessoaMaisVelha(p1, p2) {
  if (p1.idade > p2.idade) {
    return `${p1.nome} tem mais idade que ${p2.nome}.`;
  } else if (p2.idade > p1.idade) {
    return `${p2.nome} tem mais idade que ${p1.nome}.`;
  } else {
    return `${p1.nome} e ${p2.nome} tem a mesma idade.`;
  }
}

const theodoro = new Pessoa("Theodoro", "Caliari", 1981, "theodorocaliari@mailinator.com");
const naiara = new Pessoa("Naiara", "Lemes", 1984, "naralemes@mailinator.com");

console.log(pessoaMaisVelha(theodoro, naiara));
