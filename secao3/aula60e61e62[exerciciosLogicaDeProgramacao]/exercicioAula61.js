/**
 * Escreva uma função chamada ePaisagem que recebe dois args (largura e altura) de uma imagem (number)
 * Retorna true se a imagem estiver no modo paisagem (largura > altura)
 */

let imagem = {
  largura: 10,
  altura: 5
}

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(imagem.largura, imagem.altura));