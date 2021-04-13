const pessoa = {
  nome: 'Raquel',
  sobrenome: 'Romão',
  idade: 18,
  endereco: {
    rua: 'Rua Cristiana Viana',
    numero: 101
  }
};

console.log(pessoa);

//pegar o nome da pessoa
// atribuição normal
const nomeViaAtrNormal = pessoa.nome;
console.log(nomeViaAtrNormal);
// atribuição via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);
// suponha que o campo não exista no objeto, vem undefined
// posso colocar um valor default
const { nomeDoMeio = 'Não Existe', idade = 0 } = pessoa;
console.log(nomeDoMeio, idade);
// outro jeito, atribuindo um outro valor para a variável que vai obter o valor do campo do objeto + valor default
const { nome: testeNome = ''} = pessoa;
console.log(testeNome);

// obter partes isolados do obj interno ou o objeto inteiro
// e ainda obtendo o campo do objeto numa var com outro nome e valor default
const { endereco: { rua, numero: nro = 12345 }, endereco } = pessoa;
console.log(rua, nro);
console.log(endereco);

// usando spread para obter restos e haver separação do objeto
const { nome: primeiroNome = '', ...resto} = pessoa;
console.log(primeiroNome);
console.log(resto);
