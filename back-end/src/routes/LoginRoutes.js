const router = require('express').Router();
const { login } = require('../controllers/LoginControllers');

router.post('/', login);

module.exports = router;