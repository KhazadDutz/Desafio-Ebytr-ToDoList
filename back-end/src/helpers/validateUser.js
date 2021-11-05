const { findUserByEmail } = require('../models/LoginModels');

const validateUser = async (email, password) => {
  const errorMessage = { code: 401, message: 'Incorrect email or password' };
  const doesUserExists = await findUserByEmail(email);
  if (!doesUserExists) return errorMessage;
  if (doesUserExists.password !== password) return errorMessage;
  return null;
}

module.exports = {
  validateUser,
};