/*
    Método find()
    - Retorna o valor do primeiro elemento
    do array que satisfizer a condição.
    Caso contrario, undefined é retornado.
*/

const values = [5, 12, 8, 130, 44];

// Retorna o primeiro elemento que o valor é maior que 10.
const found = values.find((value) => value > 10);
console.log(found);

// Exemplo com objetos.
const fruits = [
  { name: 'apple', quantity: 23 },
  { name: 'banana', quantity: 25 },
  { name: 'orange', quantity: 52 },
];

const result = fruits.find((fruit) => fruit.name === 'orange');
console.log(result);
