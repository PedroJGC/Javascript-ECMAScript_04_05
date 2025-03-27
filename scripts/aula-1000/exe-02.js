/*
   2. Deep Copy com Objetos

  - Escreva uma função chamada `deepCopyObject` que crie uma cópia profunda de 
    um objeto. 
  - Teste-a com um objeto que possua propriedades aninhadas.
*/

const obj = { name: 'Pedro', details: { age: 30, email: 'pedro@email.com' } };

function deepCopyObject(object) {
  // Verifica se o valor não é objeto ou é nulo (caso base)
  if (object === null || typeof object != 'object') {
    console.log(object);
    return object;
  }

  // Cria um novo objeto ou array, dependendo do tipo original
  const copy = Array.isArray(object) ? [] : {};

  // Copia recursivamente cada propriedade
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      copy[key] = deepCopyObject(object[key]);
    }
  }

  return copy;
}

const deepCopy = deepCopyObject(obj);
deepCopy.name = 'João';
deepCopy.details.age = 99;

console.log(obj.details);
console.log(deepCopy.details);
