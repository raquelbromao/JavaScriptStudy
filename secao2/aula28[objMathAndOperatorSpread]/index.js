/**
 * Arredondamento
 * .ceil()  -> teto
 * .floor() -> chão
 * .round() -> faz automático
 */

let num1 = 9.54768;
console.log(Math.ceil(num1));
console.log(Math.floor(num1));
console.log(Math.round(num1));

/**
 * .max()
 *    mostra o maior número de um conjunto
 *    se pelo menos um deles não puder ser convertido para um nro, retorna NaN
 *    se nada for passado o resultado sempre será - Infinity
 *    Array.reduce() pode ser usado em conjunto para encontrar o maior em um
 *      vetor numérico
 */

console.log(Math.max(1, 2, 3, 4, 5, -1, -50, 1500, 1100));

let arr = [1, 2, 3, 4, 5, -1, -50, 1500, 1100];
let max = arr.reduce((a, b) => {
  return Math.max(a,b);
});
console.log(max);

/**
 * Pode-se tb usar o operador spread (...)
 * - para uso de obj iteráveis como arrays e strings
 * - para cópia de array
 * - inserir elementos de um array para outro
 * - passar elementos do array como argumentos individuais
 * 
 * let arr = ['h', 'e', 'y'];
 * ...arr  = 'h', 'e', 'y' 
 * 
 */  

// passar elementos do array como argumentos individuais
console.log(Math.max(...arr));

// para cópia de array
// passagem de conteúdo sem ser por referência, as mudanças aplicacadas em um
//    não serão refletidas no outro
let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array1);
console.log(array2);

// inserir elementos de um array para outro, em qualquer posição desejada
let baked_desserts = ['cake', 'cookie', 'donut'];
let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);
// inserindo a partir de flan
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

/**
 * .min()
 *    mostra o meno número de um conjunto
 *    se pelo menos um deles não puder ser convertido para um nro, retorna NaN
 *    se nada for passado o resultado sempre será Infinity
 */
 console.log(Math.min(...arr));

/**
 * .random()
 *    gera um nro aleatório entre 0(inclusivo) a 1(exclusivo) ([0,1[)
 *    também posso gerar um nro aleatório entre dois valores: 
 *      função: Math.random() * (valorMax - valorMin) + valorMin
 *      -> nesse caso é ([valorMin,valorMax[)
 *    para gerar um nro INTEIRO aletório entre dois valores:
 *      função:
 *              min = Math.ceil(min);
 *              max = Math.floor(max)
 *              Math.floor(Math.random() * (valorMax - valorMin)) + valorMin
 *      -> nesse caso é ([valorMin,valorMax[)
 *    para gerar um nro INTEIRO aleatório entre dois valores INCLUSIVE:
 *      função:
 *              min = Math.ceil(min);
 *              max = Math.floor(max)
 *              Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin
 *      -> nesse caso é ([valorMin,valorMax]) 
 */

console.log(Math.random()); //([0,1[)

let valorMax = 10;
let valorMin = 5;
console.log(Math.random() * (valorMax - valorMin) + valorMin); //([valorMin,valorMax[)

valorMax = Math.floor(valorMax);
valorMin = Math.ceil(valorMin);
console.log(Math.floor(Math.random() * (valorMax - valorMin)) + valorMin); //INTEIRO ([valorMin,valorMax[)
console.log(Math.floor(Math.random() * (valorMax - valorMin+1)) + valorMin); //INTEIRO ([valorMin,valorMax])

/**
 * .pow(base, potencia) base^potencia | (base ** potencia)
 * - Como pow() é um método estático de Math, sempre será usado como Math.pow()
 * - bases negativas com expoentes fracionários sempre retornam NaN
 * - posso obter raizez também
 */
console.log(Math.pow(7, 2));
console.log(Math.pow(2, 10));
console.log(Math.pow(-7, 1/3));
console.log(Math.pow(4, 0.5));  //(raiz quadrada de 4))
console.log(Math.pow(8, 1/3));  //(raiz cúbica de 8)
