/*
Desafio
Geronimo acredita que perde muito tempo lembrando qual número do mês representa cada um deles. Ele precisa de um programa que mude os meses do ano do calendário do celular dele para facilitar e agilizar a leitura. Ajude-o e faça um programa que, com uma determinada entrada de uma data, retorne essa data com o mês escrito por extenso.

Entrada
As entradas serão datas em formato numeral. O dia ou mês que possuirem somente um digito, terão um 0 (zero) na frente.

Saida
As saídas serão as mesmas datas da entrada porém, com o mês escrito por extenso. O mês deve ter a primeira letra em maiúsculo.
*/

let data = "23/03/2003";

function dataPorExtenso(data) {
  let dataCompleta = "";
  const padraoData = "DMA"; //DIA MES ANO (DMA) ou MES DIA ANO (MDA)
  let formatoData = "DMA";

  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  const primeiraLetraMesMaiuscula = meses.map((mes) => {
    const primeiraLetraUpper = mes.slice(0, 1).toUpperCase();
    const mesSemPrimeiraLetra = mes.slice(1, mes.length);
    const mesCompleto = primeiraLetraUpper.concat(mesSemPrimeiraLetra);
    return mesCompleto;
  });

  const dataSplit = data.split("/");

  if (padraoData === formatoData) {
    const numeroMes = dataSplit[1];
    const mesPorExtenso = primeiraLetraMesMaiuscula[numeroMes - 1];
    dataCompleta = `${dataSplit[0]} de ${mesPorExtenso} de ${dataSplit[2]}`;
  } else {
    const numeroMes = dataSplit[0];
    const mesPorExtenso = primeiraLetraMesMaiuscula[numeroMes - 1];
    dataCompleta = `${dataSplit[0]} ${mesPorExtenso} ${dataSplit[2]}`;
  }

  return dataCompleta;
}

console.log(dataPorExtenso(data));
