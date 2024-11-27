const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const students = [
    { id: 1, name: 'Alice', age: 18, grade: 'A' },
    { id: 2, name: 'Bob', age: 19, grade: 'B' },
    { id: 3, name: 'Charlie', age: 17, grade: 'A' }
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
