const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/index');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/signup', routes.signupRoutes);

app.use('/', routes.loginRoutes);

module.exports = app;
