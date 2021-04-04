/**
 * Criação básica de objetos e acessos
 */

const pessoa1 = {
  nome: 'Raquel',
  sobrenome: 'Romão',
  idade: '28'
};

const pessoa2 = {
  nome: 'Waldomiro',
  sobrenome: 'Romão',
  idade: '22'
};

console.log(pessoa1);
console.log(pessoa1.idade);
console.log(pessoa2);
console.log(pessoa2.idade);

/**
 * Função para criar esses objetos
 *    function resolve(parametro)
 *    resolve(argumento)
 * 
 * Parâmetro vs Argumento: argumento é o valor passando para o parâmetro
 */

// Essa funcão é uma factory, pois ela "fabrica" objetos
function criarPessoa(nome, sobrenome, idade) {
  // return {
  //   nome: nome,
  //   sobrenome: sobrenome,
  //   idade: idade
  // };
  //devido ao nome do parâmetro ser igual ao nome do atributo do objeto o JS já entende, então posso simplificar:
  return { nome, sobrenome, idade };
}

let pessoa3 = criarPessoa('Henrique','Barbosa',32);
console.log(pessoa3);
console.log(pessoa3.idade);

const pessoaFalante = {
  nome: 'Mickey',
  sobrenome: 'Mouse',
  idade: 101,

  fala() {
    return `${this.nome} ${this.sobrenome} está falando oi...\nE a minha idade atual é ${this.idade}`;
  },

  incrementaIdade() {
    ++this.idade;
  }
};
console.log(pessoaFalante.fala());
pessoaFalante.incrementaIdade();
console.log(pessoaFalante.fala());
