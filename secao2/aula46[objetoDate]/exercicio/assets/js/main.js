function obterTextoDiaSemana(diaSemana) {
  // JEITO #1 MAIOR
  // switch(diaSemana) {
  //   case 0:
  //     return 'domingo';
  //   case 1:
  //     return 'segunda-feira';
  //   case 2:
  //     return 'terça-feira';
  //   case 3:
  //     return 'quarta-feira';
  //   case 4:
  //     return 'quinta-feira';
  //   case 5:
  //     return 'sexta-feira';
  //   case 6:
  //     return 'sábado';
  //   default: 
  //     return 'NotFoundDiaSemana';
  // }
  // JEITO #2 MENOR
  const diasSemanas = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  return diasSemanas[diaSemana];
}

function obterTextoMes(mes) {
  // JEITO #1 MAIOR
  // switch(mes) {
  //   case 0:
  //     return 'janeiro';
  //   case 1:
  //     return 'fevereiro';
  //   case 2:
  //     return 'março';
  //   case 3:
  //     return 'abril';
  //   case 4:
  //     return 'maio';
  //   case 5:
  //     return 'junho';
  //   case 6:
  //     return 'julho';
  //   case 7:
  //     return 'agosto';
  //   case 8:
  //     return 'setembro';
  //   case 9:
  //     return 'outubro';
  //   case 10:
  //     return 'novembro';
  //   case 11:
  //     return 'dezembro';
  //   default: 
  //     return 'NotFoundMes';
  // }
  // JEITO #2 MENOR
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
                'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[mes];
}

function addZeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}

function formatarData(data) {
  const diaSemana = obterTextoDiaSemana(data.getDay());
  const dia = data.getDate();
  const mes = obterTextoMes(data.getMonth());
  const ano = data.getFullYear();
  const horas = addZeroAEsquerda(data.getHours());
  const minutos = addZeroAEsquerda(data.getMinutes());
  return `${diaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${minutos}`;
}


function main() {
  let campoData = window.document.querySelector('.container h1');
  // JEITO #1
  //campoData.innerHTML = formatarData(new Date()); //jeito maior
  // JEITO #2
  let data = new Date();
  const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
  }

  campoData.innerHTML = data.toLocaleString('pt-BR', opcoes);
}

main();