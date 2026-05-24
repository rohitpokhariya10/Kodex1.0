const nodemailer = require("nodemailer");

// Create one SMTP transporter and reuse it for every email.
const transporter = nodemailer.createTransport({
  // SMTP host and credentials come from .env.
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
console.log("SMTP_USER:", process.env.MAIL_USER);
console.log("SMTP_PASS:", process.env.MAIL_PASS ? "Loaded" : "Missing");

module.exports = transporter;
