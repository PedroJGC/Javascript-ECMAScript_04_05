/* strict mode (modo estrito): ativando esse modo, os 
erros que eram silenciados passam a gerar exeções no Javascript.*/

'use strict';

function showMessage() {
  personName = 'Pedro Carvalho';

  console.log('Olá', personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
student.point = 10;
