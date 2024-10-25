'use strict';
const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => res.end('Welcome to the payment system'))
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`)
})
app.listen(PORT, () => console.log(`API running on port: ${PORT}`));
