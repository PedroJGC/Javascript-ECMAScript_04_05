/*
    Destructuring assignment (desestruturação)
    - Permite extrair dados de arrays ou objetos em variáveis distintas.
*/

const data = ['Pedro Carvalho', 'pedro@email.com'];

// Desestruturando array
const [userName, email] = data;
console.log(`Nome: ${userName}`);
console.log(`Email: ${email}`);

const fruits = ['Banana', 'Apple', 'Orange'];

// Desestruturando somente o primeiro.
const [banana] = fruits;
console.log(banana);

// Ignorando o primeiro na desestruturação
const [_, apple] = fruits;
console.log(apple);

// Ignorando o primeiro e o segundo na desestruturação
const [, , orange] = fruits;
console.log(orange);
