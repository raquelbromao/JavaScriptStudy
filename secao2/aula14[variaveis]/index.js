/**
 * let é mais atual para criação de variáveis
 * é uma versão melhorada de var
 * existente durante seu bloco
 * não pode ser redeclarada no mesmo bloco, isso ocasiona erro
 * diferentes blocos -> diferentes variáveis
 * então é melhor usar let que var, é mais seguro
 * escopo global ou local
 * inicialização default com undefined
 */
let nomeConsagrado = 'João';  
/**
 * var é mais antigo
 * pode ser redeclarada
 * escopo global ou local
 * inicialização default com undefined
 */
var nomeConsagrada = 'Maria';
var nomeConsagrada = 'Fernanda'; // redeclarada

/**
 * const é uma variável constante, uma vez atribuído seu valor não muda
 * não pode ser atualizada ou redeclarada
 * existente durante seu bloco
 * MAS objetos que sejam constantes, msm não podendo ser redeclarados inteiramente,
 *    suas propriedades podem
 * ela não pode ser declarada sem  ser inicializada, não possui inicialização
 *    default com undefined, retorna erro caso não receba um valor
 */
const nomeFilho = 'Eduardo';
//console.log(edu); -> retorna erro (ReferenceError: edu is not defined)

const gostosEduardo = {
  comidaPrederida: 'banana',
  programaFavorito: 'Teletubbies'
}
gostosEduardo.comidaPrederida = 'maçã';
console.log(gostosEduardo);

console.log(`${nomeConsagrado} nasceu em 1992`);
console.log(`Em 2011 ${nomeConsagrado} conheceu ${nomeConsagrada}`);
console.log(nomeConsagrado, ' casou-se com ', nomeConsagrada, ' em 2018');
console.log(`${nomeConsagrada} teve 1 filho com ${nomeConsagrado} em 2020`);
console.log(`O filho de ${nomeConsagrado} se chama ${nomeFilho}`);

let nome; // -> variável sem valor declarado, então seu valor é undefined
console.log(nome);
nome = 'Raquel'; // -> variável inicializada
console.log(nome);
let soma = 2+2;

/**
 * Função para eu saber o tipo do dado
 * posso usar só o nomeVariavel eme retorna o tipo
 * ou posso usar nomeVariavel, nomeVariavel para me retorna o tipo e o seu valor
 */
console.log(typeof(soma));
console.log(typeof nome);
console.log(typeof nome, nome);

/**
 * ainda sobre const
 * - não pode ser reatribuída quando usada com valores primitivos, o valor se 
 *    se torna imutável, o endereço de memória é o mesmo sempre, não podendo ser
 *    modificado
 * 
 * - mas quando usamos const com valores mutáveis (arrays, obj), a variável 
 *    continua sendo constante, mas os valores dentro dele podem ser alterados,
 *    isso porque modificar valor não envolve reatribuição ( = ), a variável
 *    ainda aponta pro mesmo lugar da memória
 */

// OK
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array);

// NOT OKAY
// const array = [1, 2, 3, 4, 5];
// array = 'Legal';