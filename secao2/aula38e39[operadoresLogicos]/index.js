/**
 * Operadores Lógicos
 * 
 * && -> AND 
 * || -> OR
 * !  -> NOT
 * 
 * - usados para desvio de fluxo
 * - em JS tudo pode ser avalidado como true/false
 * - null, 0, '', ``, "", NaN e undefined -> retornam/são avalidados como false, chamados valores FALSY
 */

/**
 * &&
 * 
 * - todas as expressões precisam ser verdadeiras para retornar true
 * - se alguma das parte for false -> false
 * - a partir do momento que ele acha uma expressão false, ele pára de checar o resto (curto-circuito)
 */
console.log(true && true);
console.log(true && true && false);

// ele retorna 0, que é a expressão falsa encontrada
console.log('Luiz Otavio' && 0 && 'Maria');
// caso não haja expressão falsa, retorna a última expressão verdadeira encontrada ('Maria')
console.log('Luiz Otavio' && true && 'Maria');
console.log('Luiz Otavio' && NaN && 'Maria');
console.log('Luiz Otavio' && 'Maria');


/**
 * ||
 * 
 * - se qualquer parte da expressão retornar verdadeiro, então vai ser verdadeiro
 * - se todas as expressões forem false -> false
 * - a partir do momento que ele acha uma expressão true, ele pára de checar o resto (curto-circuito)
 */
console.log(true || false);
console.log(false || false || false);
console.log(false || false || true);

console.log(0 || false || null || 'Luiz' || true);

let a = 0;
let b = null;
let c = 'false';
let d = false;
let e = NaN;

console.log(a || b || c || d || e ); // -> false vem da string, ele é um valor true

// definir a cor padrão de algo sem IF
let corUsuario = null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao);
corUsuario = 'verde';
corPadrao = corUsuario || 'preto';
console.log(corPadrao);

/**
 * !
 * 
 * - inverte o valor da expressão
 * - false -> true
 * - true  -> false
 */


