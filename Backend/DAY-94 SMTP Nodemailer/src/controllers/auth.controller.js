const sendmail = require("../services/mail.service");
const otpEmailTemplate = require("../template/otpEmail.template");
const ApiError = require("../utils/apiError");

const forgotPassword = async (req , res)=>{

    let {email} = req.body;

    // Email is required because OTP must be delivered to this address.
    if(!email){
        throw new ApiError(400 , "Email is required");
    }

    // Generate a 6-digit OTP for the password reset flow.
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // In a real project, hash this OTP and store it with an expiry time.
    console.log("Generated OTP:", otp);

    // Send both plain text and HTML versions for better email client support.
    await sendmail({
        to:email,
        subject:"Your Password Reset OTP",
        text:`Your OTP is ${otp} vaild. It is valid for 10 minutes.`,
        html:otpEmailTemplate(otp),
    })

    return res.status(200).json({
        message:"OTP sent successfully",
        success:true,
    })



}
module.exports = forgotPassword;
