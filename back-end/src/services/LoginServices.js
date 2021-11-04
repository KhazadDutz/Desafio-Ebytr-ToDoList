// const jwt = require('jsonwebtoken');
const LoginModels = require('../models/LoginModels');

// const jwtConfiguration = {
//   expiresIn: '3d',
//   algorithm: 'HS256',
// };

const login = async (email) => {
  const loginStatus = await LoginModels.findUserByEmail(email);
  console.log(loginStatus);
  if (loginStatus.err) {
    return { err: { code: loginStatus.err.code, message: loginStatus.err.message } };
  }
  // const userWithoutPwd = {
  //   userInfo
  // }
  // const token = jwt.sign({ data: userWithoutPwd, secret, jwtConfiguration })
  return { ok: { code: 200, message: 'Login successful' } };
}

module.exports = {
  login,
}