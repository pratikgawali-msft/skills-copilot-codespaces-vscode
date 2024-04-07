// Create web server with express
// Create a comment route that responds with a JSON object
// Use the fs module to read the file and parse it into a JSON object
// Respond with the JSON object

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/comment', (req, res) => {
  fs.readFile('./comment.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred. Please try again later.');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});