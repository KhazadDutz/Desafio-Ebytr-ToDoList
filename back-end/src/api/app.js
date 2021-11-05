const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/index');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/register', routes.registerRoutes);

app.use('/login', routes.loginRoutes);

app.use('/tasks', routes.tasksRoutes);

module.exports = app;
