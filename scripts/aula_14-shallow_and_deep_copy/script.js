/*
   Shallow Copy (cópia superficial)
   - Não pega os itens aninhados.
*/

const htmlCourse = {
  course: 'HTML',
  students: [{ name: 'Pedro', email: 'pedro@email.com' }],
};

/*
const jsCourse = {
  ...htmlCourse,
  course: 'Javascript',
};*/

// Vai modificar o htmlCourse também students é uma referência e não uma cópia
// jsCourse.students.push({ name: 'Maria', email: 'maria@email.com' });

/*
   Deep Copy (cópia profunda)
*/

const jsCourse = {
  ...htmlCourse,
  course: 'Javascript',
  students: [...htmlCourse.students, { name: 'Maria', email: 'maria@email.com' }],
};

// Outra maneira de fazer o Deep copy
jsCourse.students.push({ name: 'João', email: 'joao@email.com' });

// Mais uma maneira
jsCourse.students = [...htmlCourse.students, { name: 'José', email: 'jose@email.com' }];

console.log(htmlCourse, jsCourse);
