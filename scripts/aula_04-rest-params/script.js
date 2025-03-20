/*
    Rest params (...)
    - Permite representar um 
    número indefinido de argumentos como array.
*/

function values(...rest) {
  // Mostra a quantidade de parâmetros
  console.log(rest.length);

  //Exibindo o consteúdo do array
  console.log(...rest);

  // Exibe o conteúdo do rest que é um array
  console.log(rest);
}

values(2, 1, 3);
