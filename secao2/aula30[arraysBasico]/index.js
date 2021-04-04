/**
 * Array é um objeto global
 * - são indexadas por elemento dentro dela
 */

let frutas = ['abacaxi','acerola','tomate']
let tudo = ['Luiz', 'Maria', 'Joao', 1, true, null];

console.log(frutas);
console.log(tudo);
console.log(frutas.length);

/**
 * Acessando o array
 * - frutas[0] -> primeiro
 * - frutas[frutas.lenght - 1] -> último elemento
 */

console.log(tudo[0]);
console.log(tudo[tudo.length-1]);

/**
 * Adicionando elementos ao final da lista
 * - frutas.push(novoElemento); -> boa prática
 * - frutas[indiceNovo] = novoElemento;
 * - frutas[frutas.length] = novoElemento;
 * 
 * Métodos como join, slice, indexOf levam em conta o valor de lenght
 * Push e Splice também resultam de uma atualização na propriedade lenght
 * Construção e preenchimento automático de arrays também leva em conta o lenght
 * 
 * Adicionando elementos ao início da lista
 * - frutas.unshift(novoElemento);
 * 
 * Removendo elementos do final da lista 
 * - frutas.pop();
 * 
 * Removendo elementos do inicio da lista
 * - frutas.shift();
 * 
 * Remover um elemento, mas mantendo a posição vazia
 * - delete frutas[indice];
 * 
 * RESUMINDO:
 * - shift / unshift -> início do array
 * - push / pop      -> final do array
 */

tudo[6] = 'olar'; // add elemento ao final
tudo.push('teste', 'mais um teste'); // add elemento ao final -> MELHOR prática
tudo[tudo.length] = 'mais um'; // add elemento ao final
console.log(tudo);

console.log(Object.keys(tudo)); // criação automática
tudo.length = 2;
console.log(Object.keys(tudo)); // criação automática após mudança no lenght

frutas.unshift('maçã'); // add no início do array
console.log(frutas);

frutas.pop(); // remove TOMATE do final do array
console.log(frutas)

frutas.shift(); // remove MAÇÃ do início do array
console.log(frutas)

frutas.push('tomate', 'maçã');
delete frutas[1]; // remove acerola, mas preserva a posição com conteúdo vazio
console.log(frutas);
console.log(frutas[1]); // retorna undefined para posições vazias
frutas[1] = 'acerola';

/**
 * Acessar posições que não existem no array não gera erros, retorna undefined
 * Mas tentar acessar o conteúdo e usá-lo, isso sim, gera erro
 */
console.log(frutas[50]);

/**
 * Fatiar um array
 * - frutas.slice(indiceInicialInclusivo, indiceFinalExclusivo)
 * - [indiceInicial,Indicefinal[ / Inclusivo,Exclusivo
 * 
 * Posso também usar com nros negativos:
 * - ele pega o tamanho do array menos o nro negativo
 * - frutas[0, -1] -> retorna o array menos a a última posição
 * - frutas[0, -2] -> retorna o array menos as duas últimas posições
 * - frutas[1, -2] -> retorna o array a partir do [1], menos as duas últimas posições
 */

console.log(frutas.slice(0, 2)) // ['abacaxi', 'acerola']
console.log(frutas.slice(0, 3)) // ['abacaxi', 'acerola', 'tomate']

frutas.push('banana');
console.log(frutas);
console.log(frutas.slice(0, -1)); // ['abacaxi, 'acerola, 'tomate', 'maçã']
console.log(frutas.slice(1, -2)); // ['acerola', 'tomate'];

/**
 * typeof array -> Object
 * instaceof    -> verificar o tipo de instância do objeto, retorna booleano
 */
console.log(typeof frutas);
console.log(frutas instanceof Array);
console.log(frutas instanceof Object); // Array vem de Object

let alunos = 123;
console.log(alunos instanceof Array);
console.log(alunos instanceof Object);
