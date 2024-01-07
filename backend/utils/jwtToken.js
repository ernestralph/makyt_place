// creating token and saving into cookies

const sendToken = (user, statusCode, res) => {
 const token = user.getJwtToken();
 //   Setting cookie options
 const options = {
  expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), 
  httpOnly: true,
 }
 // Saving token to the response object as a cookie
 res.status(statusCode).cookie('token', token, options).status(statusCode).json({
  success: true,
  user,
  token,
 });
}

module.exports = sendToken;