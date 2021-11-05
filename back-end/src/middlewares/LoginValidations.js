const { validateEmail } = require('../helpers/validateEmail')
const { validatePwd } = require('../helpers/validatePwd')
const { validateUser } = require('../helpers/validateUser')

const loginUserValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const isValidEmail = await validateEmail(email);
  if (isValidEmail) {
    return res.status(isValidEmail.code).json({ message: isValidEmail.message })
  }
  const isPwdValid = await validatePwd(password);
  if (isPwdValid) {
    return res.status(isPwdValid.code).json({ message: isPwdValid.message });
  }
  const doesUserExists = await validateUser(email, password);
  if (doesUserExists) {
    return res.status(doesUserExists.code).json({ message: doesUserExists.message });
  }
  next();
}

module.exports = {
  loginUserValidation,
};