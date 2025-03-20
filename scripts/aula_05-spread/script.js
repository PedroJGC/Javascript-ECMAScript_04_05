/*
    Spread (espalhar)
    - Permite que um objeto iterável, como 
    uma expressão de array ou uma string seja
    expandido para ser usado onde zero ou mais argumentos.
*/

const numbers = [1, 2, 3];
console.log(numbers);

// Spread
console.log(...numbers);

const data = [
  {
    name: 'Pedro',
    email: 'pedro@email.com',
    avatar: 'r.png',
  },
  {
    name: 'João',
    email: 'joao@email.com',
    avatar: 'j.png',
  },
];

console.log(data);

// Utilizando o spread no array com objetos.
console.log(...data);
