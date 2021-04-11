/**
 * Operadores de comparação:
 * 
 * >    maior
 * >=   maior que ou igual a
 * <    menor
 * <=   menor que ou igual a
 * ==   igualdade (valor) -> NÃO RECOMENDADO
 * ===  igualdade estrito (valor e tipo)
 * !=   diferente (valor) -> NÃO RECOMENDADO
 * !==  diferente estrito (valor e tipo)
*/

console.log(10<5);
console.log(10<=5);
console.log(5<=5);
console.log(10>5);
console.log(10>=5);

console.log('\n\n');

let num1 = 10;
let num2 = 10;
console.log(num1 == num2);
console.log(num1 === num2);

num2 = '10';
console.log(num1 == num2); // -> ele só vai avaliar o valor e no o tipo, retornando positivo, ocorreu aqui uma conversão de tipo automática
console.log(num1 === num2);// -> esse sim dá uma comparação real, analisando tb o tipo

num1 = 6;
num2 = 10;
console.log(num1 != num2);
console.log(num1 !== num2);

num1 = 6;
num2 = '6';
console.log(num1 != num2);
console.log(num1 !== num2);

num1 = 6;
num2 = 'a';
console.log(num1 != num2);
console.log(num1 !== num2);

// percebe que são diferentes
console.log(null === undefined);
console.log(null !== undefined);

// aqui não
console.log(null == undefined);
console.log(null != undefined);