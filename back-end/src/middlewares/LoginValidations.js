const helpers = require('../helpers/index');
const { findUserByEmail } = require('../models/LoginModels');

const loginUserValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const isValidEmail = await helpers.validateEmail(email);
  if (isValidEmail) {
    return res.status(isValidEmail.code).json({ message: isValidEmail.message })
  }
  const isPwdValid = await helpers.validatePwd(password);
  if (isPwdValid) {
    return res.status(isPwdValid.code).json({ message: isPwdValid.message });
  }
  const doesUserExists = await helpers.validateUser(email, password);
  if (doesUserExists) {
    return res.status(doesUserExists.code).json({ message: doesUserExists.message });
  }
  next();
}

module.exports = {
  loginUserValidation,
};