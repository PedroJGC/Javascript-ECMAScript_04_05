/*
    Método findIndex()
    - Retorna o ÍNDICE no array do primeiro
    elemento que satisfizer a condição. Caso
    contrário, retorna -1, indicando que nenhum 
    elemento passou no teste.
*/

const values = [4, 6, 8, 12];

// Obtendo o primeiro índice do elemento que o valor é maior que 4
const index = values.findIndex((value) => value > 4);
console.log(index); // Retorna a posição do array "1"
console.log(values[index]); // Retorna o emento na posição encontrada que é "6"

// Exemplo de quando o valor não é encontrado
console.log(values.findIndex((value) => value > 12));
