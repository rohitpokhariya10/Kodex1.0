const jwt = require("jsonwebtoken");

// Short-life token used to access protected routes.
let generateAccessToken =  (userId) => {
  return  jwt.sign(
    {
      id: userId,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

// Long-life token used to create a new access token.
let generateRefreshToken =  (userId) => {
  return  jwt.sign(
    {
      id: userId,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};
module.exports = {generateRefreshToken , generateAccessToken}
