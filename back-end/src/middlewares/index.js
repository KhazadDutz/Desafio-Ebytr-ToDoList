const {
  loginUserValidation,
} = require('./LoginValidations');

const {
  validateJWT,
} = require('./validateJWT');

module.exports = {
  loginUserValidation,
  validateJWT,
};