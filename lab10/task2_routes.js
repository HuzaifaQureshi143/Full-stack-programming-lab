const express = require('express');
const app = express();

// /home route
app.get('/home', (req, res) => {
  res.send('<h1>Welcome Home</h1><p>This is the Home page.</p>');
});

// /about route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We build Express apps.</p>');
});

// /contact route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
});

app.listen(3002, () => {
  console.log('Task 2: http://localhost:3002/home');
});
