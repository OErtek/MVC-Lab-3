const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


let students = [];


app.get('/add-student', (req, res) => {
    res.send(`
        <form action="/student" method="post">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName"><br>
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName"><br>
            <label for="major">Major:</label><br>
            <input type="text" id="major" name="major"><br>
            <button type="submit">Submit</button>
        </form>
    `);
});


app.post('/student', (req, res) => {
    const { firstName, lastName, major } = req.body;
    students.push({ firstName, lastName, major });
    res.send(`Hello, ${firstName} ${lastName} on ${major} studies!`);
});


app.get('/users', (req, res) => {
    let userList = '<ul>';
    students.forEach(student => {
        userList += `<li><p>${student.firstName} ${student.lastName} - ${student.major}</p></li>`;
    });
    userList += '</ul>';
    res.send(userList);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/add-student');
});
