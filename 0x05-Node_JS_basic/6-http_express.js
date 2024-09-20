const express = require('express');

const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, () => {
  console.log('Server is running');
});

module.exports = app;
