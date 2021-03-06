const router = require('express').Router();
const LoginControllers = require('../controllers/LoginControllers');
const validations = require('../middlewares/index');

router.post(
  '/',
  validations.credencialValidation,
  validations.validateUser,
  LoginControllers.login,
);

module.exports = router;