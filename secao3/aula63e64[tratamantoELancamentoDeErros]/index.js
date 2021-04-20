/**
 * try {
 * 
 * executadoQuandoNaoHaErros()
 * 
 * } catch(e) {
 * 
 * ExecutadoQuandoOcorreErro()
 * 
 * } finally {
 * 
 * sempreExecutado();
 * 
 * }
 * 
 * 
 * try: declaração a ser executada
 * catch: declaração a ser executação se uma exceção é lançado no bloco try
 * finally: declaração a ser executada quando o try é completado. Executado independentemente se a exceção foi ou não lançada/capturada
 * 
 * 
 * existem 3 formas de declaração try:
 * - try...catch
 * - try...finally
 * - try...catch...finally
 * 
 * posso aninhar declarações try, caso uma try filha não tenha catch, a catch da try pai é introduzida
 * posso usar declarações try para manipulação de exceções
 * 
 */
try {
  console.log(naoExisto);
} catch (error) {
  console.log("'nãoExisto' não existe");
  console.log(error);
}

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    //throw('x e y precisam ser números');
    //throw new ReferenceError('x e y precisam ser números');
    throw new Error('x e y precisam ser números');
  }

  return x+y;
}


try {
  console.log(soma(1, 2));
  soma('1', 2);
} catch (error) {
  console.log(error);
}

/**
 * Posso usar uma ou mais declarações catch com condicionais para manipular exceções especificas
 * Se houver uma catch incondicional com mais catchs condicionais, o catch incondicional dve vir por ultimo
 */

//  try {
//   myroutine(); // pode lançar três tipos de exceções
// } catch (e if e instanceof TypeError) {
//   // declarações para manipular exceções TypeError
// } catch (e if e instanceof RangeError) {
//   // declarações para manipular exceções RangeError
// } catch (e if e instanceof EvalError) {
//   // declarações para manipular exceções EvalError
// } catch (e) {
//   // declarações para manipular quaisquer exceções não especificadas
//   logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
// }


/**
 * Aninhamento de erros
 * Caso eu não gere erro no segundo try, e gere no primeiro, vai ser executado a linha 92
 */

try {
  console.log('\nabri o arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');

  try {
    console.log(b);
  } catch(error) {
    console.log('Tratamento de erro filho');
  } finally {
    console.log('FINNALY #2: também é sempre executado');
  }

} catch(error) {
  console.log('Tratamento de erro pai');
} finally {
  console.log('FINALLY #1: sempre é executado');
}


function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

try {
console.log(retornaHora(new Date('01-01-1992 12:58:8')));
retornaHora(11);
} catch(error) {
  console.log(e);
} finally {
  console.log('tenha um bom dia');
}