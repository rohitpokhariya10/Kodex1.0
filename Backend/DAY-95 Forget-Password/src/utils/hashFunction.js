const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const hashFunction = async (password) => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

const comparePassword = async (password, passwordHash) => {
  return bcrypt.compare(password, passwordHash);
};

module.exports = {
  hashFunction,
  comparePassword,
};
