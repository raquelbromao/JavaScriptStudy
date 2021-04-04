/**
 * trabalhando por referência
 */

let a = [1, 2];
let b = a; // -> valor por referência
console.log(a, b);
b.push(3);
console.log(a, b);
a = 3;
console.log(a, b); // -> b não é alterado aqui

/**
 * tupos de dados primitivos:
 * - number
 * - string
 * - undefined -> não inicializada uma variável que é declarada
 * - null      -> não aponta pra lugar algum da memória
 * - boolean
 * - symbol    -> mais na frente
 */