/**
 * - continue: termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.
 *    - colocar o que eu não quero que seja executado após o continue
 *    - while: volta a condição do laço
 *    - for: volta a expressão, atualizando o laço
 *    - posso incluir, de maneira opcional, um rótulo que permite pular para a próxima iteração de um laço rotulado
 *        - continue precisa estar dentro do laço rotulado
 * - break: termina a execução do laço completamente
 *    - posso usar quando precisar encontrar certas coisas numa lista imensa e ter encontrado já
 *    - posso incluir, de maneira opcional, um rótulo que permite quebrar esse laço rotulado
 *        - breake precisa estar dentro do laço rotulado
 */


const numeros = [1, 2, 4, 5, 6, 7, 8,9 ,33, 455, 56];

// LAÇO NÃO ROTULADO
for (let numero of numeros) {
  console.log(numero);

  console.log('INÍCIO');

  if (numero === 2) {
    continue;
  }

  console.log('MEIO');

  if (numero === 455) {
    break;
  }
}

console.log('SAIU');

let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkJ: while (j > 4) {
    console.log("j: " + j);
    j -= 1;

    // cada vez que o continue for alcançado, checkJ reiterará até sua condição for falsa. 
    // Quando retornar false, o restante de checkIAndJ será executado.
    if ((j % 2) == 0) {
      continue checkJ;
    }
  }

  console.log("i = " + i);
  console.log("j = " + j);
}



blocoExterno:{
  bloco_interno:{
    console.log ('1');
    break blocoExterno;       // encerra bloco_interno e bloco_externok
    console.log (':-(');      // não é executado
  }
  console.log ('2');          // não é executado
}