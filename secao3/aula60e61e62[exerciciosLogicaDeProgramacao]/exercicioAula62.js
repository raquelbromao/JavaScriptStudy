/**
 * Escreva uma função que recbe um número e retorne o seguinte:
 * - número é divisível por 3 = Fizz
 * - número é divisível por 5 =  Buzz
 * - número é divisível por 3 e 5 = FizzBuzz
 * - número NÃO é divisível por 3 e 5 = Retorna o próprio número
 *  IMP: 
 *  - checar se o nro é realmente um nro = Retorna o próprio número
 *  - usar a função com número de 0 a 100;
 */

function fizzBuzz(numero) {
  if (typeof(numero) === 'number') {
    if ((numero % 3) === 0) {
      if ((numero % 5) === 0) {
        return 'FizzBuzz';
      }
      return 'Fizz';
    }

    if((numero % 5) === 0) {
      return 'Buzz';
    }

    return numero;
  }

  return numero;
}

//melhorando
function fizzBuzz2(numero) {
  if (typeof(numero) !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}

console.log(typeof 15);    //number
console.log(typeof '15');  //string
console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(35));
console.log(fizzBuzz(8));
console.log(fizzBuzz('15'));

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz2(i));
}