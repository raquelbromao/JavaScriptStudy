/**
 * Todas são funções da classe window
 * - window.alert()   -> retorna undefined
 * - window.confirm() -> retorna booleano
 * - window.prompt()  -> retorna o conteudo digitado, default é string vazia
 * Posso fazer tudo isso direto no console do chrome
 */

window.alert('Nossa mensagem'); // -> sem abreviar a função

const isConfirmado = confirm('Tem certeza?');
console.log(isConfirmado);

let texto = prompt('digite algo ai...');
console.log(texto);

let number1 = Number(prompt('digite um numero:'));
let number2 = Number(prompt('digite um outro numero:'));
alert(`A soma deles é ${number1+number2}`); // -> sem abreviar a função

