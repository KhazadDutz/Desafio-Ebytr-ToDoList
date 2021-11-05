const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = `${process.env.JWT_KEY}`;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.userInfo = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  validateJWT,
};
