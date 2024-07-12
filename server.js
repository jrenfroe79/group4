const express = require(`express`);
const morgan = require(`morgan`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const dbURI = "mongodb+srv://group4:jjrgroup4@group4.jbaccmx.mongodb.net/?retryWrites=true&w=majority&appName=group4"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

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
