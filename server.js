const express = require(`express`);
const morgan = require(`morgan`);
const mongoose = require(`mongoose`);
const path = require(`path`);

// Create the Express app
const app = express();

// Middleware for serving CSS files with the correct MIME type
app.get('/styles/styles.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public', 'styles', 'styles.css'));
});

// Middleware for serving static files under '/styles' route
app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));

// Set the static directory for serving files
app.use(express.static(path.join(__dirname, `public`)));

// Middleware for logging
app.use(morgan(`dev`));

// Handle requests for favicon.ico
app.get(`/favicon.ico`, (req, res) => {
  res.status(204).end();
});

// Define routes
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `index.html`));
});

// Start the server on a dynamically assigned port
const server = app.listen(0, () => {
  const port = server.address().port;
  console.log(`Server is running on http://localhost:${port}`);
});
