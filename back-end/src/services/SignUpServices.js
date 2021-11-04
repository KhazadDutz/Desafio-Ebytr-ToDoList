const SignUpModels = require('../models/SignUpModels');

const registerNewUser = async (email, password) => {
  const status = await SignUpModels.registerNewUser(email, password);;
  console.log(status, 'DENTRO DO SERVICES')
  if (status.err) {
    return { err: { code: status.err.code, message: status.err.message } };
  }
  return { ok: { code: 200, message: 'Sign Up Successfully' } };
}

module.exports = {
  registerNewUser,
};