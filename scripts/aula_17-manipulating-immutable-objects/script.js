/*
    Manipulando objetos imutáveis
*/

const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author: {
    name: 'Pedro',
    email: 'pedro@email.com',
  },
};

const updateBook = {
  ...book,
  title: 'Criando um front-end moderno com HTML',
  category: 'html',
  type: 'Programming',
};

// Original intacto.
console.log(book);

// Modificado.
console.log(updateBook);

// Utilizando o operador de desestruturação (rest operator) para remover propriedades.
const { category, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);
