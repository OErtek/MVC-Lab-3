const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

let students = [
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 },
  { id: 3, name: 'Mike Johnson', age: 21 }
];

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'page1.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'page2.html'));
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const { name, age } = req.body;
  const id = students.length + 1;
  const newStudent = { id, name, age };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  students = students.filter(student => student.id !== parseInt(id));
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
