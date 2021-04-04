// CONSOLE -> objeto para exibir informações no debug / console
/*
.log(object[,object...]) ->  emitir info gerais, pode usar substituição de
  string e outros argumentos
*/  
console.log('Teste de Aspas "Simples"');
console.log("Teste de Aspas 'Duplas'");
console.log(`Teste de 'Template' "String"`);
console.log(123456, 28.97, `Teste de 'Template' "String"`);

let band = 'The Smashing Pumpkins';
let album = 'Mellon Collie and the Infinite Sadness';
let discography = {
  band: band,
  album: album
}
console.log('\n\nMinha banda favorita é ', band, '.\nMeu albúm preferido é: ', discography, '\n\n');

// %o or %O -> javascript object
// %d or %i -> inteiro, com suporte para formatação (não funciona no Chrome e
//  nem no nodejs)
// %s -> string
// %f -> nro flutuante
for (var i=0; i<5; i++) {
  console.log('Essa função %s está na chamada %d', 'log()', i);
}

/*
.group(object[,object...]) ->  cria um grupo e recua a linha para um nivel
de identação superior, um alias para ele é .groupCollapsed()
*/  
/*
.groupEnd() ->  fecha o grupo, voltando ao nídel de identação anterior
*/  
console.log("\n\nThis is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level\n\n");


// Para os métodos abaixo, são úteis e diferentes do .log() pq nos navegadores
//  exibem cores específicas e posso filtrar eles
// no nodejs não tem diferença... aliás, a documentação cita ainda que o .info()
// e .debug() é  um alias para o .log() e .warn() é alias para .error()
// .log() e .info() -> stdout
/*
.info(object[,object...]) -> exibe info de registro, pode usar substituição
de string e outros argumentos
*/  
console.info("info\n");
/*
.debug(object[,object...]) -> exibe info de debug, pode usar substituição
de string e outros argumentos
*/  
console.debug("debug\n");
// .error() and .warn() -> stderr
/*
.error(object[,object...]) -> exibe mensagem de erro, pode usar substituição
de string e outros argumentos
*/  
// sim, isso é uma referência a Britney Spears, me processe
console.error(new Error('Oops! ... Did it again'));
const code = 5;
console.error('error #%d', code);
/*
.warn(object[,object...]) -> exibe mensagem de alerta, pode usar substituição
de string e outros argumentos
*/  
const awesomeName = 'Will Robinson';
console.warn(`\nDanger ${awesomeName}! Danger!\n\n`); // -> TEMPLATE STRING

/*
.table(tabularData[, properties]) -> constrói uma tabela com dados de
tabularData
*/ 
// Linha1{coluna A, coluna B}, Linha2{coluna A, coluna B}
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
//  Linha1{coluna A, coluna B}, Linha2{coluna A, coluna B}, exibe apenas coluna a
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);

/*
.time([label]) | .timeEnd([label]) -> inicia/finaliza um timer, identificados
unicamente por sua label, e é preciso usar a mesma label em .timeEnd()
*/
console.time('10-elements');
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd('10-elements');

/*
.timeLog([label][, ...data]) -> para um timer já iniciado anteriormente, exibe
o tempo já decorrido e algum dado para stdout
*/
console.time('process');
//doExpensiveProcess wich returns 42
const value = 42;
console.timeLog('process', value);
//doExpensiveProcess2(value);
console.timeEnd('process');

/*
.trace([message][, ...args]) -> printa em stderr a mensagem, com util.format(),
  formatando a mensagem e o stack trace da atual posição no código
*/
console.trace('\n\nShow me');

/*
.assert(value[, ...message]) -> escreve uma mensagem se o valor passado for
falso ou omitido
 */
var isTrue = true;
var isFalse = false;
console.assert(isTrue, 'nada acontece, feijoada');
// sim, mesma piada, me processe!
console.assert(isFalse, 'Oops! ... Did it again\n\n');

/**
 * .count([label]) -> especificando uma label, ele conta quantas vezes essa msm
 * label apareceu. Valor default é 'default'
 * 
 * .countReset([label]) -> reseta o contador a partir da sua label
 */
 console.count(); //1
 console.count('raquel'); //1
 console.count('alexandra'); //1
 console.count('alexandra'); //2
 console.count(); //2
 console.count('alexandra'); //3
 console.count('raquel'); //2
 console.count(); //3
 console.log('\nRESETA .COUNT([LABEL])\n')
 console.countReset();
 console.count();
 console.countReset('raquel');
 console.count('raquel');
 console.countReset('alexandra');
 console.count('alexandra');

/**
 * existem outros métodos, mas não cito aqui pq são para inspect()
 */
