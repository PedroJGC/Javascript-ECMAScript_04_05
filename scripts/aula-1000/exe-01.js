/*
    1. Shallow Copy com Arrays**
    - Crie uma função chamada `shallowCopyArray` que recebe um array como argumento  
    - Retorna uma cópia superficial. 
    - Modifique a cópia e observe se o array original também é afetado.
*/

const arr = [
  [1, 2],
  [3, 4],
];

function shallowCopyArray(array) {
  array = [...arr];

  return array;
}

const shallowCopy = shallowCopyArray(arr);
shallowCopy[0][0] = 99;

console.log(arr);
console.log(shallowCopy);
