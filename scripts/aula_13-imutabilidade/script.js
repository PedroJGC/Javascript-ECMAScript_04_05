/*
   Imutabilidade 
   - É um conceito fundamental em programação, especialmente em 
   linguagens funcionais, e também pode ser aplicado no desenvolvimento JavaScript. 
   - Quando falamos de imutabilidade, estamos nos referindo à propriedade de um dado 
   não poder ser alterado depois de criado. 
   - Ao invés de modificar diretamente o estado existente (ou seja, o valor original), 
   você cria uma nova versão do dado.
*/

const address1 = {
  street: 'Av. Brasil',
  number: 20,
};

/* 
  Isso não é uma cópia, e sim uma referência
  const address2 = address1;
  address2.number = 30;
  
   saida:
    {street: 'Av. Brasil', number: 20}
    {street: 'Av. Brasil', number: 20}
*/

const address2 = { ...address1, number: 30 };
/*
  saida:
    {street: 'Av. Brasil', number: 20}
    {street: 'Av. Brasil', number: 30}
 */

console.log(address1, address2);

const list1 = ['Apple', 'Banana'];

// Exemplo de referência de Array
// const list2 = list1;
// list2.push('Watermelon');

const list2 = [...list1, 'Watermelon'];

console.log(list1, list2);
