let a = 'A';
let b = 'B';
let c = 'C';

console.log(a, b, c);

const num = [1, 2, 3];

[a, b, c] = num; //atribuição por desestruturação

console.log('\nPós desestrururação\n', a, b, c);

//               0,    1,    2,    3,    4,    5,    6,    7,    8     INDICES
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// atribuição por desestruturacao com var ou spread
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(resto);


// atribuição de valores de arrays para constantes mais complexas
const numeroN = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const numeroSeis = numeroN[1][2];
console.log(numeroSeis);
// AINDA MAIS COMPLEXA e ignorando outros valores
const [,[,,seis]] = numeroN;
console.log(seis);

function f() {
  return [1, 2, 3];
}

var [d, , e] = f();
console.log(d); // 1
console.log(e); // 3

var [y, ...z] = [1, 2, 3];
console.log(y); // 1
console.log(z); // [2, 3]