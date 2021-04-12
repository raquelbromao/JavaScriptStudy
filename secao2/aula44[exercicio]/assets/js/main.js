const form = document.querySelector('form');

function calcularIMC(event) {
  event.preventDefault();
  const peso = form.querySelector('#peso');
  const altura = form.querySelector('#altura');
  console.log(`O peso não possui um valor válido: ${peso}`);
  console.log(`A altura não possui um valor válido: ${altura}`);
  console.log('evento prevenido');
}

function setResultado() {

}

form.addEventListener('submit', calcularIMC);