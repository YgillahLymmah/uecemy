const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
//app.use('/api/courses', courseRoutes);
routes(app)
module.exports = app;
