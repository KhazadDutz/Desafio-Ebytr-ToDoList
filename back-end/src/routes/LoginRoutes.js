const router = require('express').Router();
const LoginControllers = require('../controllers/LoginControllers');
const validations = require('../middlewares/index');

router.post(
  '/', 
  validations.loginUserValidation, 
  LoginControllers.login
);

module.exports = router;