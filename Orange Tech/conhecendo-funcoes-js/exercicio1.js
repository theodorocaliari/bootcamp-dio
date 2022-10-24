function calculaAcrescimo(valor, porcentagem) {
  const valorAcrescimo = valor * (porcentagem / 100);
  return valor + valorAcrescimo;
}

function calculaDesconto(valor, porcentagem) {
  const valorDesconto = valor * (porcentagem / 100);
  return valor - valorDesconto;
}

function valorAPagar(valor, modoPagamento) {
  let precoFinal = 0;

  if (modoPagamento >= 4) {
    precoFinal = calculaAcrescimo(valor, 10);
  } else if (modoPagamento === 2) {
    precoFinal = calculaDesconto(valor, 15);
  } else if (modoPagamento === 1) {
    precoFinal = calculaDesconto(valor, 10);
  } else {
    precoFinal = precoProduto;
  }

  return precoFinal;
}

(function () {
  console.log(valorAPagar(2500, 4));
})();
