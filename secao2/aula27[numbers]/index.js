let num1 = 1;
let num2 = 2.5;

// uma string numa operação de + é realizado concatenação
console.log(num1.toString()+num2); // concatena

num1 = 1500;
/**
 * .toString(base)
 *    base é entre 2 e 36, indica a base utilizada para representar os valores
 *      numéricos, caso seja fora do intervalo é lançado um erro (RangeError)
 *    ainda convertendo para tipo string mesmo com essas bases
 *    esse método sobrescreve o toString de Object, ele não herda
 *    se for negativo o sinal é preservado
 */
console.log(typeof num1.toString(2)); // representação binária
console.log(Number(-2).toString(2)); // representação binária

/**
 * Tratativa de números com mts casas decimais
 * 
 * .toFixed() -> formata o número com ponto fixo, entre 0 e 20, por default é 0
 *    pode ser arredondado caso seja necessário
 *    ou adicionado zeros para completar o nro de casas decimais
 *  
 */
num1 = 10.57895512555;
console.log(num1.toFixed(2));
console.log(num1.toFixed(20));

/**
 * Verificar se o nro é inteiro
 * 
 * .isInteger() -> retorna um booleano
 *    se o valor é NaN ou infinito -> false
 */

console.log(Number.isInteger(num1));
console.log(Number.isInteger(10));
console.log(Number.isInteger(''));      //false
console.log(Number.isInteger(10*'oi')); //false

/**
 * JS possui uma tipagem fraca, ele decide o que ele "acha" que deve fazer
 */
 let num3 = 10;
 let temp = num3 * '5';
 console.log(temp);
 console.log(2 * 'a'); // -> NaN

/**
 * NaN - Not a Number - valor especial
 * - operadores de igualdade == | === não podem ser utilizadfos com ele
 * - .isNaN() | isNaN()
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

/**
 * Teria que dar 0.8, porém ocorre uma imprecisão
 */
num4 = 0.7;
num5 = 0.1;
console.log(num4+num5);
num4 += num5; //0.8
num4 += num5; //0.9
num4 += num5; //1.0
console.log(num4);
console.log(num4.toFixed(2));        // arredonda para 1.00
console.log(Number.isInteger(num4)); // true, pois é nr redondo
console.log(parseFloat(num4));       // forço o cast para float
console.log(Number.isInteger(num4)); // agora sim dá false, pois forcei o tipo nele

num4 += num5; //1.09999999999999999999999
console.log(parseFloat(num4.toFixed(2))); // arrumei para 1.1
console.log(Number(num4.toFixed(2)));     // arrumei para 1.1

/**
 * Ao dividir números por zero não é gerado erro, é retornado:
 * - Infinity
 * - (-Infinity)
 */
console.log(100/0) // retorna true
console.log(-100/0) // retorna true
