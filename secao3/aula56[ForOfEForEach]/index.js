/**
 * For Of -> específico para objetos iteráveis, como strings e arrays
 * - objetos não podem ser usados aqui, não são iteráveis
 */

const nome = 'Raquel Romão'

// MODO CLÁSSICO
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

// Acessa os valores em si
for (let i of nome) {
  console.log(i);
}

const frutas = ['maçã', 'banana', 'uva'];
for (let i of frutas) {
  console.log(i);
}

/**
 * For Each -> par arrays
 */
frutas.forEach(function(valor, indice, array) {
  console.log(indice, valor, array);
});

/**
 * For    -> geralmente com arrays ou string
 * For in -> retorna o índice ou chave (strings, arrays e objetos)
 * For of -> retorna o valor em si (iteráveis, arrays, strings)
 */