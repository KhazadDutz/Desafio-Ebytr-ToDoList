const { findUserByEmail } = require('../models/LoginModels');

const validateUser = async (req, res, next) => {
  const { email, password } = req.body
  const doesUserExists = await findUserByEmail(email);
  if (!doesUserExists || doesUserExists.password !== password) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  const { _id } = doesUserExists;
  req.user = {
    id: _id.toString(),
    email,
  }
  next();
}

module.exports = {
  validateUser,
};