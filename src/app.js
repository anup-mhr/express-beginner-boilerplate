const express = require('express');

const app = express();

//MIDDLEWARES
app.use(express.json()); //for parsing json
app.use(express.urlencoded({ extended: false })); //for reading form data

//ROUTES

module.exports = app;
