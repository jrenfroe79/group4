const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/group4', { useNewUrlParser: true, useUnifiedTopology: true });

const Course = require('./models/course');
const Teacher = require('./models/teacher');

// Define routes for courses and teachers

app.get('/courses', (req, res) => {
    Course.find({}, (err, courses) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(courses);
        }
    });
});

// Add routes for creating, updating, and deleting courses and teachers

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
