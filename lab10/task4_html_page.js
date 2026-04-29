const express = require('express');
const app = express();

// / route — Full HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Full Stack Lab</title>
      <style>
        body { font-family: Arial; max-width: 700px; margin: 40px auto; }
        h1   { color: #2c3e50; }
        li   { padding: 4px 0; }
      </style>
    </head>
    <body>
      <h1>Full Stack Node.js + Express Lab</h1>
      <p>
        This lab demonstrates server-side development using Node.js
        and Express.js. We build REST APIs, dynamic routes, and
        serve HTML directly from the server.
      </p>
      <h2>Topics Covered:</h2>
      <ul>
        <li>Setting up Node.js project</li>
        <li>HTTP server with http module</li>
        <li>Express.js routing</li>
        <li>REST API CRUD operations</li>
        <li>Dynamic route parameters</li>
      </ul>
    </body>
    </html>
  `);
});

app.listen(3004, () => {
  console.log('Task 4: http://localhost:3004/');
});
