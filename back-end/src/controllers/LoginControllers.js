const LoginServices = require('../services/LoginServices');

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginStatus = await LoginServices.login(email);
  if (loginStatus.err) {
    return res.status(loginStatus.err.code).json({ message: loginStatus.err.message });
  }
  return res.status(loginStatus.ok.code).json({ message: loginStatus.ok.message });
}

module.exports = {
  login,
}