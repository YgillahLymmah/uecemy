const express = require('express');
const bodyParser = require('body-parser');
const course = require('./courseRoutes');
const app = require('../app');

module.exports = app => {
    app.use(express.json(), 
express.urlencoded({extended:false}),
course
)
}