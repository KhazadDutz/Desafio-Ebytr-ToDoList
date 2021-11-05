const { findUserByEmail } = require('../models/LoginModels');

const checkDuplicateUser = async (req, res, next) => {
  const { email, password } = req.body
  const doesUserExists = await findUserByEmail(email);
  if (doesUserExists) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  next();
}

module.exports = {
  checkDuplicateUser,
}
