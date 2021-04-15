/**
 * .querySelector() -> retorna um único elemento (Element), o primeiro que bater com o arg enviado 
 * .querySelectorAll() -> retorna o conjunto de elementos (NodeList)
 */ 

// querySelector so retorna um elemento
const divParagrafos = window.document.querySelector('.paragrafos'); //selecionando via classe
// selecionar uma coleção de elementos
const paragrafos = divParagrafos.querySelectorAll('p');

// pegar a cor do background do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

// Mudar a cor do background dos paragrafos para o backgroundColorBody e alterar a cor do texto
for (const p of paragrafos) {
  console.log(p);
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = 'blue';
}