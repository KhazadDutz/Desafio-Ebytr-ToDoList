const RegisterModels = require('../models/RegisterModels');

const registerNewUser = async (email, password) => {
  const status = await RegisterModels.registerNewUser(email, password);
  if (status.err) {
    return { err: { code: status.err.code, message: status.err.message } };
  }
  return { ok: { code: 200, message: 'Sign Up Successfully' } };
}

module.exports = {
  registerNewUser,
};