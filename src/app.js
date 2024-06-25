const express = require('express');

const app = express();

//MIDDLEWARES
app.use(express.json()); //for parsing json

//ROUTES

module.exports = app;
