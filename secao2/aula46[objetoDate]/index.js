/**
 * Objeto de tempo
 * 
 * Sempre criado como construtor -> new Date(args...);
 * 
 * - se nenhum arg for fornecido, será criado um objeto com a data e hora atual do sistema
 * - se ao menos 2 args forem fornecidos, o restante será configurado como 1 (caso o dia estiver ausente) ou 0 para os outros
 * - possui comportamento uniforme nas plataformas: o valor pode ser transmitido entre sistemas e se for criado um objt de data local, vai refletir o tempo do atual sistema
 * - suporta métodos UTC (universal -> Greenwich Mean Time, GMT -> tempo definido pelo World Time Standard) e locais (computador onde o JS é executado)
 * - invocar Date sem o operador new resultará numa string representando a data e hora corrente
 * 
 */

console.log('Date() sem o operador new: ',Date());

let dataAtual = new Date();
console.log('new Date(): ', dataAtual); //YYYY-MM-DDTHH:mm:ss.sssZ

let dataInicial = new Date(0);
console.log('new Date(0): ', dataInicial.toString());

/**
 * Obter horas/dias em milissegundos para somar e subtrair da data 0 ()
 */
let tresHoras = 60 * 60 * 3 * 1000;
let umDIa = 60 * 60 * 24 * 1000;

console.log('Data 0 mais 3 horas: ', new Date(0 + tresHoras));
console.log('Data 0 mais 1 dia: ', new Date(0 - umDIa));

/**
 * new Date(ano, mes, dia, hora, minuto, segundo, milissegundos)
 * - se eu omitir ele passa pra 0
 * - se eu colocar tempo a mais, tipo 60s no contrutor, ele vai corrigir a data para o próximo minuto com os segundos zerados
 * - mês no construtor segue a ordem 0-11
 */

let dataNascimento = new Date('1992-06-26 08:30:00');
console.log('Data nascimento:', dataNascimento);

/**
 * Seguem funções para obter partes isoladas da data:
 */
console.log('Ano:', dataNascimento.getFullYear());
console.log('Mês:', dataNascimento.getMonth()+1); // 0 - Janeiro, 11 - Dezembro
console.log('Dia do mês:', dataNascimento.getDate());
console.log('Dia da semana:', dataNascimento.getDay()); // 0 - Domingo, 6 - Sábado
console.log('Horas:', dataNascimento.getHours());
console.log('Minutos:', dataNascimento.getMinutes());
console.log('Segundos', dataNascimento.getSeconds());
console.log('Milissegundos:', dataNascimento.getMilliseconds());

/**
 * Para obter os milissegundos do marco zero até hoje
 */
console.log(Date.now());

function addZeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

/**
 * Fornatação de datas
 */
function formataData(data) {
  console.log('Data SEM formatar: ', data);
  const dia = addZeroAEsquerda(data.getDate());
  const mes = addZeroAEsquerda(data.getMonth()+1);
  const ano = data.getFullYear();
  const hora = addZeroAEsquerda(data.getHours());
  const minuto = addZeroAEsquerda(data.getMinutes());
  const segundo = addZeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const dataBrasil = formataData(dataAtual);
console.log('Data COM formatação: ', dataBrasil);
/**
 * Jeito mais simples de formatar a data de acordo com a localidade 
 * - toLocaleString(local [,options]):
 *    - retorna uma string com a representacção da data e tempo a partir do idioma fornecido no arg1
 * 
 * - CUIDADO para não confundir com:
 *    - toLocaleDateString(local [,options]): converte apenas a data
 *    - toLocaleTimeString(local [,options]): converte apenas o tempo
 */

 let dataBR = new Date();
 const opcoes = {
   dateStyle: 'full',
   timeStyle: 'short'
 };

console.log(dataBR.toLocaleString('pt-BR', opcoes));
