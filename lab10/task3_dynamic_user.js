const express = require('express');
const app = express();

// /user/:name — Dynamic route parameter
app.get('/user/:name', (req, res) => {
  const name = req.params.name;  // Extract name from URL
  res.send(`<h1>Hello, ${name}!</h1><p>Welcome to the Dynamic User Page.</p>`);
});

app.listen(3003, () => {
  console.log('Task 3: http://localhost:3003/user/:name');
});
    