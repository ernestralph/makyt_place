const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
 let {token} = req.cookies;
 if(!token){
  return next(new ErrorHandler('Please Login to access this route',401));
 }

 const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

 req.user = await User.findById(decoded.id);

 next();
})