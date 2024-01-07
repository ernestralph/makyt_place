const express = require('express');
const ErrorHandler = require('./middleware/error');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// imports routes
const user = require('./controller/user');


// some middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({extended: true}));

// config
if(process.env.NODE_ENV !=="PRODUCTION"){
  require("dotenv").config({
   path: "backend/config/.env"
  });
}

app.use("/api/v2/user", user);

// For Error Handling
app.use(ErrorHandler);
// app.use(function() {
//   new ErrorHandler();
// });

module.exports = app;