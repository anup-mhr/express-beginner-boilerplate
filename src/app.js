const express = require('express');
const morgan = require('./config/morgan');
const config = require('./config/config');

const app = express();

//MIDDLEWARES
if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

//for parsing json
app.use(express.json());

//for reading form data
app.use(express.urlencoded({ extended: false }));

//ROUTES

module.exports = app;
