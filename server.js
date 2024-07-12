const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbURI = "mongodb+srv://group4:jjrgroup4@group4.jbaccmx.mongodb.net/?retryWrites=true&w=majority&appName=group4";

mongoose.connect(dbURI)
  .then(result => {
    const server = app.listen(0, () => {
      const PORT = server.address().port;
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log(err));

const Course = require('./models/course');
const Teacher = require('./models/teacher');

// Middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Define routes for courses and teachers
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

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
