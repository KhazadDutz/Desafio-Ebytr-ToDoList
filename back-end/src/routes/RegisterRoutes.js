const router = require('express').Router();
const validations = require('../middlewares/index');
const { registerNewUser } = require('../controllers/RegisterControllers');

router.post(
  '/',
  validations.credencialValidation,
  validations.checkDuplicateUser,
  registerNewUser,
);

module.exports = router;