const transporter = require("../config/mail.config");
const ApiError = require("../utils/apiError");

// Reusable mail sender: pass receiver, subject, and content from any controller.
const sendmail= async ({to , text, subject , html})=>{
    // Validate required mail fields before calling the SMTP server.
    if(!to){
        throw new ApiError(400 , "Email receiver is required");
    }
     if(!subject){
        throw new ApiError(400 , "Email subject is required");
    }
     if(!text && !html){
        throw new ApiError(400 , "Email content is required");
    }

    const mailOptions = {
        from:process.env.MAIL_USER,
        to,
        subject,
        text,
        html
    };

    // Send the email through the configured Nodemailer transporter.
    const info = await transporter.sendMail(mailOptions);
    console.log("info--->" , info);
    return info;

}
module.exports = sendmail;
