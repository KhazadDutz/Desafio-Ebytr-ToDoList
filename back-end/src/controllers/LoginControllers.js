const LoginServices = require('../services/LoginServices');

const login = async (req, res) => {
  const { email, id } = req.user
  const loginStatus = await LoginServices.login(email, id);
  return res.status(loginStatus.code).json({ message: loginStatus.token });
}

module.exports = {
  login,
}