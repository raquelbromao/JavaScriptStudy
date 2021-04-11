// IIFE -> função criada e auto invocada(?)
function main() {
  const people = [];
  //const form = document.querySelector('.form'); //pela classe
  //const form = document.querySelector('#form'); //pelo id
  const form = document.querySelector('form'); //pela tag, a primeira se tiver mais de uma
  
  //MODO 1 DE MATAR O FORM:
  // form.onsubmit = function (event) {
  //   event.preventDefault();
  //   console.log("oi");
  //   alert(1);
  // };

  let contador = 1;
  function createPerson(event) {
    event.preventDefault();
    const name = form.querySelector('.name');
    const lastName = form.querySelector('.lastName');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');

    people.push({ name, lastName, weight, height })

    console.log(people);
  }

  form.addEventListener('submit', createPerson);
}

teste();
