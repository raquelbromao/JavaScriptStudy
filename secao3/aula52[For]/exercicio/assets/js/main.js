alert('Criando as tags');
const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

let tagNova, texto;
const container = window.document.querySelector('.container');

//criando a tag que vai englobar as tags do array
const div = window.document.createElement('div');

// inserindo as tags do array na tag recém criada div
for (let i = 0; i < elementos.length; i++) {
  console.log(elementos[i]);
  const { tag: nomeTag, texto: textoTag } = elementos[i];
  // cria uma instância do elemento para a tag que eu especificar
  tagNova = window.document.createElement(nomeTag);
  // cria um nó na DOM de texto com a string passada
  texto = window.document.createTextNode(textoTag); // OU tagNova.innerText = textoTag
  // adiciona o nó de texto com a tag criada, vinculando as duas
  tagNova.appendChild(texto);
  div.appendChild(tagNova);
}

// inserindo a tag div (já recheada de outras tags vindas do array) dentro da tag section
container.appendChild(div);