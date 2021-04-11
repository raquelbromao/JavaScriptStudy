/**
 * Tipos de dados primitivos imutáveis:
 * - string
 * - number
 * - boolean
 * - undefined
 * - null
 * - bigint
 * - symbol
 * 
 * - tirando null e undefined, todos tem objetos wrapper equivalentes
 * - método valueOf() do objeto wrapper retorna o valor primitivo
 * - valores copiados
 */

let numeroExe = new Number(123);
console.log(numeroExe.valueOf());
console.log(typeof numeroExe);
console.log(numeroExe instanceof Number);

// sem o new não vira objeto Number mesmo
let numeroExe2 = Number(123);
console.log(numeroExe2.valueOf());
console.log(typeof numeroExe2);
console.log(numeroExe2 instanceof Number);

/**
 *  Com dado primitivo é cópia, os valores ficam independentes
 *  Locais diferentes na memória
 */
let a = 'A';
let b = a;
console.log(a, ' - ' ,b);
a = 'outra coisa';
console.log(a, ' - ' ,b);
b = 'mais uma coisa';
console.log(a, ' - ' ,b);

/**
 * Tipos de dados não primitivos- mutáveis (referência):
 * 
 * - array
 * - object
 * - function
 * 
 * Os valores não são independentes
 * Apontando pros mesmos locais nas memórias, passados por referência
 */

let c = [1,2,3];
let d = c;
console.log(c, ' - ', d);
d[0] = 9;
console.log(c, ' - ', d);
c[0] = 1;
console.log(c, ' - ', d);
c.push(76);
console.log(c, ' - ', d);

/**
 * Se eu quiser realmente copiar o valor de não-primitivoss, sem referência, eu uso spread:
 */

let e = ['banana', 'maçã', 'mamão'];
let f = [...e];
console.log(e, ' - ', f);
f.pop();
console.log(e, ' - ', f);
e.push('acerola');
console.log(e, ' - ', f);

// mesma coisa em referência com objetos
const g = {
  nome: 'Raquel',
  sobrenome: 'Romão'
};
const h = g;

console.log(g, ' - ', h);
h.sobrenome = 'Barbosa';
console.log(g, ' - ', h);
g.nome = 'Sofia';
console.log(g, ' - ', h);

// agora copiar o objeto, sem referência, apenas cópia de valor
const i = {...g};
console.log(g, ' - ', i);
i.sobrenome = 'Calda Nunes';
console.log(g, ' - ', i);
g.nome = 'Raquel';
console.log(g, ' - ', i);