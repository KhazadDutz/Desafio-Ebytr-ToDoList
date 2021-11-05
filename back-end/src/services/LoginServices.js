const jwt = require('jsonwebtoken');

require("dotenv").config();

const login = async (email, id) => {
  const jwtConfiguration = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const secret = `${process.env.JWT_KEY}`;
  const userWithoutPwd = {
    id,
    email,
  }

  const token = await jwt.sign({ data: userWithoutPwd }, secret, jwtConfiguration);
  return { code: 200, token };
}

module.exports = {
  login,
}