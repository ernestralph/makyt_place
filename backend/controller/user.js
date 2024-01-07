const express = require("express");
const path = require("path");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { upload } = require("../multer");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Bad request", 400));
  }

  try {
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        }
      });
      return next(new ErrorHandler("Email already in use", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const user = {
      name,
      email,
      password,
      avatar: {
        public_id: fileUrl,
        url: fileUrl,
      },
    };

    const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try {
      await sendMail({
        email: user.email,
        subject: "Account Activation",
        message: `Hello ${user.name} Please click on the link to activate your account:${activationUrl}`,
      });

      res.status(200).json({
        message: `Please check your email:- ${user.email} to activate your account.`,
        success: true,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message), 400);
    }
  } catch (error) {
    return next(new ErrorHandler(error.message), 400);
  }
});

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m", //expire after five mins
  });
};

// activate user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorResponse("Invalid Token", 400));
      }

      const { name, email, password, avatar } = newUser;

      let user = await User.findOne({ email });
      if (user) {
        return next(new ErrorHandler(`Email already exists!`, 400));
      }

      user = await User.create({
        name,
        email,
        password,
        avatar,
      });

      sendToken(user, 200, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// login user
router.post(
  "/login-user",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // check if email and password
      if (!email || !password) {
        return next(
          new ErrorHandler("Please provide an email and a password", 400)
        );
      }
      // get the user from the database by his/her email
      const user = await User.findOne({ email }).select("+password");
      // if no user with that email then show error
      if (!user) {
        return next(
          new ErrorHandler("The email or password is incorrect", 401)
        );
      }
      // compare passwords - bcrypt
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return next(
          new ErrorHandler("Please provide correct information", 401)
        );
      }
      // create token
      sendToken(user, 200, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// load user
router.get("/getuser", isAuthenticated, catchAsyncErrors( async (req, res, next) => {
 try {
  const user = await User.findById(req.user.id).select('-password');

  if(!user){
   return next(new ErrorHandler("User does'nt exists", 400));
  }
  res.status(200).json({success: true ,  user});
  
 } catch (error) {
  return next(new ErrorHandler(error.message, 500));
 }
}))

module.exports = router;
