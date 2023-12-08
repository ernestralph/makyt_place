const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found with this error. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 409);
  }
  // wrong jwt error
  if (err.name === "JsonWebTokenError" && !req.isAuthenticated()) {
    const message = "Your url is invalid please try again later";
    err = new ErrorHandler(message, 403);
  }
  // jwt expired
  if (err.name === "TokenExpiredError") {
    const message = "Session has been Expired Please Login Again";
    err = new ErrorHandler(message, 402);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
