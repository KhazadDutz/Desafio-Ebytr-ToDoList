const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('../routes/index');

const app = express();

app.use(bodyParser.json());

// app.use('/', routes.loginRoutes);

module.exports = app;
