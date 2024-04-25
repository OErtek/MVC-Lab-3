

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  const date = new Date().toISOString();
  console.log(`Request ${req.method} on path ${req.url} ${date}`);
  next();
});


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/submit', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
