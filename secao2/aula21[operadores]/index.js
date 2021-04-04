/**
 * Operadores Aritméticos
 * +  -> adição e concatenação
 * -  -> subtração
 * *  -> multiplicação
 * ** -> potencicação
 * %  -> resto da divisão
 */

// adição
const num1 = 5;
const num2 = 10;
console.log(num1+num2);
// concatenação
const num3 = '5';
console.log(num3+num2);

/**
 * Incremento/Decremento
 * ++a | a++
 * --a | a--
 * +=2 | =+a
 * *=2 | =*2
 */

let contador = 1;
console.log(contador++); // -> mostra e depois incremente -> pós-incrementa
console.log(contador);   // -> 2
console.log(++contador); // -> incrementa e depois mostra -> pré-incremento
contador += 2; // -> contador = contador + 2;
console.log(contador);

/**
 * NaN - Not a Number - valor especial
 * - operadores de igualdade == | === não podem ser utilizadfos com ele
 * - usar Number.isNaN() | isNaN()
 * - Ele é retornado quando uma operação matemática falha (Math.sqrt(-1)) ou
 *    quando uma função tenta transformar uma string em inteiro 
 * - parseInt() | parseFloat() | Number() -> converter para números
 */

 console.log(isNaN(NaN));
 console.log(isNaN(Number.NaN));

let num4 = 10;
let num5 = parseInt('5');
const num6 = '5';
const num7 = 'L5';

console.log(num4+num5);
console.log(typeof num5);
console.log(isNaN(num5)); 
console.log(isNaN(num6));
console.log(isNaN(num7));

num5 = parseFloat('5.2');
console.log(num4+num5);

num5 = Number('5.2');
console.log(num4+num5);

num5 = Number('L');
console.log(num4+num5);

/**
 * Método para troca de variáveis sem var temporária
 */

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varC, varA, varB];

console.log(varA);
console.log(varB);
console.log(varC);