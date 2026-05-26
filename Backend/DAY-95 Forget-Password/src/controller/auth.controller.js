const User = require("../models/user.model");
const sendmail = require("../services/mail.service");
const registerUser = require("../services/register.service");
const ApiError = require("../utils/apiError");
const cookieOptions = require("../utils/cookieOptions");
const { hashFunction } = require("../utils/hashFunction");
const { generatePasswordResetToken, getResetTokenExpiry } = require("../utils/token");

//1.
const registerPage = (req, res) => {
  res.render("registerPage");
};
//1.
const registerController = async (req, res, next) => {
  const { user, accessToken, refreshToken } = await registerUser(req.body);

  res.cookie("accessToken", accessToken, cookieOptions);
  res.cookie("refreshToken", refreshToken, cookieOptions);

  return res.status(201).json({
    message: "User registered successfully",
    success: true,
    user,
  });
};


//2.
const forgotPasswordPage = (req, res) => {
  //forgot-password--> jis route me bhjna hai uska path
  return res.render("forgot-password");
};
//2.
const forgotPasswordController = async (req, res) => {
  let { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }
  let user = await User.findOne({ email });
  //for security reasons
  if (!user) {
    throw new ApiError(
      200,
      "If this email is registered, a password reset link has been sent.",
    );
  }
  //if email regitered hai then generate Raw token and usko hash bhi kro
  let passwordResetToken = generatePasswordResetToken();
  let hashRawToken = hashFunction(passwordResetToken);
  let passwordResetTokenExpiry = getResetTokenExpiry();
  //db me save karo
  user.passwordResetToken = passwordResetToken;
  user.passwordResetExpires = passwordResetTokenExpiry;
  await user.save();

  //resetURL
  let resetUrl = `${process.env.APP_BASE_URL}/api/auth/resetPasswordPage/${passwordResetToken}`;

   // 6. Mail send karo
    await sendmail({
      to: user.email,
      subject: "Reset your password",
      text: `Click this link to reset your password: ${resetUrl}`,
      html: `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password.</p>
        <p>This link is valid for 10 minutes.</p>
        <a href="${resetUrl}">Reset Password</a>
      `,
    });

    return res.status(200).json({
      message: "Mail sent successfully",
      success: true,
    });
};


//3.
const resetPasswordPage = (req , res)=>{
  let {token} = req.params;
  res.render("resetPassword" , {
    token:token,
  });

}
//3.
const resetPassword = async (req , res)=>{
//params se token niklega
//jwt.verify ---> id
///--->

}
module.exports = {
  registerPage,
  registerController,
  forgotPasswordPage,
  forgotPasswordController,
  resetPasswordPage,
  resetPassword
};
