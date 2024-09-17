const express = require('express');

const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n')
})

app.listen(port, () => {
  console.log('Server is running');
})