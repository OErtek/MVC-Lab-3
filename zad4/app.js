const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'page1.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'page2.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
