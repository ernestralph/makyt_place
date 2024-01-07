const nodemailer = require("nodemailer");

const sendMail = async (options) => {
 const transPorter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  service: process.env.SMTP_SERVICE,
  secure: false, 
  auth:{
   user: process.env.SMTP_MAIL,
   pass: process.env.SMTP_PASSWORD
  },
 });

 const mailOptions ={
  from: process.env.SMTP_MAIL,
  to: options.email,
  subject: options.subject,
  text: options.message,
 };

 await transPorter.sendMail(mailOptions);
}
module.exports = sendMail;