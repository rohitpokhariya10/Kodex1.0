const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const generateAccessToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN }
  );
};

const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
  );
};

const generatePasswordResetToken = ()=>{
    //toString("hex")---> means readable string
    //hex --> hexadecimal
    let rawResetToken = crypto.randomBytes(32).toString("hex");
    //console.log("Password reset Token->" , rawResetToken);
    return rawResetToken;

}

const getResetTokenExpiry = () => {
  return Date.now() + 10 * 60 * 1000;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generatePasswordResetToken,
  getResetTokenExpiry
};
