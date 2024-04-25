const express = require('express');
const app = express();


app.get('/home', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HOME</title>
      </head>
      <body>
        <p>HOME DUŻYMI LITERAMI</p>
      </body>
    </html>
  `);
});

app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>STUDENT</title>
      </head>
      <body>
        <p>STUDENT DUŻYMI LITERAMI</p>
      </body>
    </html>
  `);
});


app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ADD-STUDENT</title>
      </head>
      <body>
        <p>ADD-STUDENT DUŻYMI LITERAMI</p>
      </body>
    </html>
  `);
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server http://localhost:3000/home is running`);
});
