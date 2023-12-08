const express = require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload")

// some middlewares
app.use(express.json());
app.use(cookieParser);
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({ useTemplateFiles: true}))

// config
if(process.env.NODE_ENV !=="PRODUCTION"){
  require("dotenv").config({
   path: "backend/config/.env"
  });
}

// For Error Handling
app.use(ErrorHandler);

module.exports = app;