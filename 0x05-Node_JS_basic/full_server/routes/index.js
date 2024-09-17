const express = require('express');

const AppController = require('../controllers/AppController.js');
const StudentsController = require('../controllers/StudentsController.js');

const route = express();

route.get('/', (req, res) => {
  return AppController(req, res);
});

route.get('/students', (req, res) => {
  return StudentsController(req, res);
});

route.get('/students/:major', (req, res) => {
  return StudentsController(req, res);
});

module.exports = route;
