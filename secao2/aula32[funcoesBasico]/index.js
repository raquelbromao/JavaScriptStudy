function saudacao(nome) {
  return `Olar, ${nome} (´｡• ω •｡\`)`;
}

console.log(saudacao('Raquel'));

/**
 * Caso eu não especifique o que a função deve retornar, ela  vai mandar
 *  undefined
 */

function aleatorio() {
  console.log('(´｡• ω •｡`)');
}
let resultadoFuncao = aleatorio();
console.log(resultadoFuncao);

function soma(x, y) {
  return x+y;
}
console.log(soma(2,2))
console.log(soma()); // se eu não mandar nada vai ser undefined + undefined = NaN
console.log(soma('Raquel',' Romão')); // concatena as strings, não especifiquei o tipo de dado de entrada

/**
 * Assumir valores default caso não sejam enviados argumentos
 */
function somaNova(x = 1, y = 1) {
  return x+y;
}

console.log(somaNova());
console.log(somaNova(2,2));
console.log(soma('Raquel',' Romão'));

/**
 * Outros modos de criar funções:
 * 
 * - função anônima: precisa de ; no final
 *    let raiz = function(args) {
 *    };
 * 
 * - arrow function: sem palavra function
 *    let raiz = (args) => {
 *    };
 *    elas vierem pra simplificar quando é só um arg, sem {} e sem return
 *    let raiz = n => Math.pow(n,0.5);
 */

// função anônima
const raiz = function(n) {
  return Math.pow(n, 0.5);
};
console.log(raiz(9));
console.log(raiz(16));

// arrow function
const potencia = (n, m) => {
  return Math.pow(n, m);
};
console.log(potencia(2,2));
console.log(potencia(2,10));

const raizNova = n => Math.pow(n, 0.5);
console.log(raiz(9));
console.log(raiz(16));