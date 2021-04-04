let umaString = 'Uma "String"';
console.log(umaString+'\n');
umaString = "Um \"texto\"";
console.log(umaString+'\n');

// BARRA INVERTIDA
umaString = "Um \\texto";
console.log(umaString+'\n');
// TAB
umaString = "Um \ttexto";
console.log(umaString+'\n');

/**
 * posso iterar sobre um texto
 * as strings são indexáveis, cara caractere possui um índice
 * 
 * 0123456789
 * uma string 
 * 
 * o tipo string é uma classe com diversas funções
 * acessa como se fosse um array nomeVar[indice] | usando .charAt() retorna vazio
 * caso o indice seja fora do range retorna undefined
 * 
 */
umaString = "uma string";
console.log(umaString[4]);
console.log(umaString[-1]);
console.log(umaString[10]);


console.log(umaString.charAt(6));
console.log(umaString.charAt(-1));
console.log(umaString.charAt(10));

let stringParaConcatenar = " muito bonita";
console.log(umaString.concat(stringParaConcatenar, ' mas muito ', 'sem utilidade'));

console.log(umaString.indexOf('string'));
console.log(umaString.indexOf('linda')); // retorna -1, pois não existe

/**
* .indexOf([string a ser buscada], [indice a partir do qual buscar])
*     caso não encontre retorna -1
*     caso encontre retorna o indice
* .lastIndexOf([string a ser buscada], [indice a partir do qual buscar])
*     para fazer a busca no sentido contrário
*     caso eu coloque o indice inexistente ou não exista a string -> -1
*/
console.log(umaString.indexOf('n', 5)); 
console.log(umaString.indexOf('u', 2)); 

console.log(umaString.lastIndexOf('n', 10)); 
console.log(umaString.lastIndexOf('u', 6)); 

/**
* .match(regex)
*     encontrar o que eu quero via regex
*     caso eu  forneça nada -> ["", {outras infos}];
*/
console.log(umaString.match());
console.log(umaString.match(/[a-z]/));
console.log(umaString.match(/[a-z]/)[0]);

/**
 * .search(regex)
 *    retorna o indice onde foi encontrado
 *    caso eu  forneça nada -> 0
 *    caso não encontre     -> -1
 */
console.log(umaString.search());
console.log(umaString.search(/[a-z]/));
console.log(umaString.search('Z'));

/**
 * .replace([o que eu quero que seja substituido],[substiuição])
 *    pode ser tanto uma string ou uma regex nos valores de input
 */
let stringForReplace = 'o rato roeu a roupa do rei de roma';
console.log(stringForReplace.replace(/r/, '#')); // -> substitui o primeiro r
console.log(stringForReplace.replace(/r/g, '#')); // -> substitui todos os r's

/**
 * .lenght
 *    retorna o tamanho da string
 *    não é uma função
 *    ela inicia a contagem a partir do 1
 */
console.log(umaString.length);

/**
 * ainda foi falado de:
 * .slice()
 * .substring()
 * .toUpperCase()
 * .toLowerCase()
 */