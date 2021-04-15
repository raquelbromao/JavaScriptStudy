// modo clássico
for (let i = 0; i <= 100; i++) {
  console.log(`Linha ${i}`);
}

// inciando de um numero maior
for (let i = 400; i <= 500; i++) {
  console.log(`Linha ${i}`);
}

//incrementar de um jeito diferente, ao invés de 1 em 1 (i++)
for (let i = 400; i <= 500; i += 10) {
  console.log(`Linha ${i}`);
}

//começar de nros negativos
//incrementar de um jeito diferente, ao invés de 1 em 1 (i++)
for (let i = -100; i <= 200; i += 10) {
  console.log(`Linha ${i}`);
}

//invertendo
for (let i = 100; i >= -200; i -= 10) {
  console.log(`Linha ${i}`);
}


//checar nros pares
for (let i = 0; i <= 40; i++) {
  const resto = i % 2;
  resto === 0 ? console.log(`${i} é par`) : '';
}

//acesso em arrays
const frutas = ['maçã', 'uva', 'banana', 'melancia'];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}