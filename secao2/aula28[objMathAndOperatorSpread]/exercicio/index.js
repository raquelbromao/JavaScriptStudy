let userNumber = Number(prompt('Digite um número:'));
const titleNumber = window.document.getElementById('numero-titulo');
titleNumber.innerHTML = userNumber;

// Obter raiz quadrada
const raizQuadrada = window.document.getElementById('raiz-quadrada');
raizQuadrada.innerHTML = Math.pow(userNumber, 0.5);
// Verificar se o nro é inteiro
const isInteiro = window.document.getElementById('numero-inteiro');
isInteiro.innerHTML = Number.isInteger(userNumber)
// Verificar se é NaN
const isNumero = window.document.getElementById('numero-mesmo');
isNumero.innerHTML = isNaN(userNumber);
// Obter o chão
const valorChao = window.document.getElementById('valor-chao');
valorChao.innerHTML = Math.floor(userNumber);
// Obter o teto
const valorTeto = window.document.getElementById('valor-teto');
valorTeto.innerHTML = Math.ceil(userNumber);
// Obter Casas decimais
const numeroEmDecimais = window.document.getElementById('casas-decimais');
numeroEmDecimais.innerHTML = Number.parseFloat(userNumber).toFixed(2);