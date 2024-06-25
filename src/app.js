const express = require('express');
const morgan = require('./config/morgan');
const config = require('./config/config');
const compression = require('compression');
const cors = require('cors');

const app = express();

//MIDDLEWARES
if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

//for parsing json
app.use(express.json());

//for reading form data
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

//ROUTES

module.exports = app;
