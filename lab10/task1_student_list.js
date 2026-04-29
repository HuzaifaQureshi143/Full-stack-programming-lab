const express = require('express');
const app = express();

// Data stored in an array
const students = [
  { id: 1, name: 'Ali Khan',    age: 20 },
  { id: 2, name: 'Ahmed Raza',  age: 21 },
  { id: 3, name: 'Sara Malik',  age: 22 },
  { id: 4, name: 'Usman Tariq', age: 20 },
  { id: 5, name: 'Fatima Noor', age: 23 }
];

// GET /students — Show student list using HTML <li>
app.get('/students', (req, res) => {
  let listItems = students.map(s =>
    `<li><strong>${s.name}</strong> - Age: ${s.age}</li>`
  ).join('');

  res.send(`
    <h1>Student List</h1>
    <p>Total: ${students.length}</p>
    <ul>${listItems}</ul>
  `);
});

app.listen(3001, () => {
  console.log('Task 1: http://localhost:3001/students');
});
