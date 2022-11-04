const valorProduto = 40;
const valorComDesconto = 30;

function retornaPercentualDesconto(valorNormal, valorDescontado) {
  const percentualDesconto = 100 - (valorDescontado * 100) / valorNormal;
  return percentualDesconto;
}

console.log(`O desconto foi de ${retornaPercentualDesconto(valorProduto, valorComDesconto)}%`);
