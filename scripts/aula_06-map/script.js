/*
    Método map()
    - Chama a função callback recebida por parâmetro 
    para cada elemento do Array original, em ordem,
    e consotrói um novo array com base nos retornos 
    de cada chamada. E no final, devolve o novo array.
*/

const products = ['Teclado', 'Mouse', 'Monitor'];

// Percorrendo os itens do Array
products.map((product) => {
  console.log(product);
});

// Sintaxe reduzida
products.map((product) => console.log(product));

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
  // return product.toUpperCase();

  return {
    id: Math.random(),
    description: product,
  };
});

console.log(formatted);
// formatted.map((product) => console.log(product));
