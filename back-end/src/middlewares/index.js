const {
  validateJWT,
} = require('./validateJWT');

const {
  credencialValidation,
} = require('./credencialsValidations');

const {
  validateUser,
} = require('./validateUser');

const {
  checkDuplicateUser,
} = require('./checkDuplicateUser');

module.exports = {
  validateJWT,
  validateUser,
  credencialValidation,
  checkDuplicateUser,
};