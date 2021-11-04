const SignUpServices = require('../services/SignUpServices');

const registerNewUser = async (req, res) => {
  const { email, password } = req.body;
  await SignUpServices.registerNewUser(email, password);
  return res.status(200).json({ message: 'User registration successful' });
}

module.exports = {
  registerNewUser,
};