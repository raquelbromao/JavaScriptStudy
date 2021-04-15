/**
 * For in -> lê os índices ou chaves do objeto
 */

const frutas = ['maçã', 'banana', 'uva'];
const pessoa = {
  nome: 'Raquel',
  sobrenome: 'Romão',
  idade: 28
};

// INDICES
for (const i in frutas) {
  console.log(i);
  console.log(frutas[i]);
}

console.log(pessoa.nome);
console.log(pessoa['nome']); // -> úitil para acessos dinâmicos quando não sabemos o nome da propriedade

// CHAVES
for (const propriedade in pessoa) {
  // para acessar propriedade
  console.log(propriedade, pessoa[propriedade]);
}