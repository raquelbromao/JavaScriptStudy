// 1. Uma função que recebe 2 números e retorne o maior deles


function max(x, y) {
  return (x > y) ? x : y;
}

// agora em arrowFunction (melhoria)

const max2 = (x, y) => {
  return (x > y) ? x : y;
}

// nova melhoria, como a arrowFunction tem só uma linha, ela não precisa das chaves e sem return
const max3 = (x, y) => (x > y) ? x : y;

console.log(max(10, 20));
console.log(max2(10, 20));
console.log(max3(10, 20));