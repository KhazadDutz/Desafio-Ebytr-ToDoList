const RegisterServices = require('../services/RegisterServices');

const registerNewUser = async (req, res) => {
  const { email, password } = req.body;
  const status = await RegisterServices.registerNewUser(email, password);

  if (status.err) {
    return res.status(status.err.code).json({ message: status.err.message });
  }
  return res.status(status.ok.code).json({ message: status.ok.message });
}

module.exports = {
  registerNewUser,
};