/**
 * While e Do While -> quando eu não sei a hora que o final vai ocorrer
 * 
 * while -> checa a condição primeiro e depois executa o laço
 * do while -> executa o laço uma vez e daí checa a condição
 */

let i = 0;

while(i <= 10) {
  console.log(i);
  i++;
}

const nome = 'Raquel';

i = 0;
while(i < nome.length) {
  console.log(nome[i]);
  i++;
}

function random(max, min) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 30; 
let rand = random(min, max);

console.log('\n############# WHILE\n');

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('\n############# DO WHILE\n');

do  {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 20);