/*
   Shallow freeze (objetos imutáveis)
   - Não pega os itens aninhados.
*/

const book = {
  title: 'Objetos Imutáveis',
  category: 'javascript',
  author: {
    name: 'Pedro',
    email: 'pedro@email.com',
  },
};

// O javascript em si não impõe restrições à modificação dos objetos.
// book.category = 'HTML';

// Congela o objeto e impede a modificação.
Object.freeze(book);
book.category = 'CSS'; // Não modifica.

// O Object.freeze() não impede modificações profundas em objetos aninhados (shallow freeze).
book.author.name = 'João'; // Modifica

console.log(book);
