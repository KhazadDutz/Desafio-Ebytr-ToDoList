const router = require('express').Router();
const { registerNewUser } = require('../controllers/SignUpControllers');

router.post('/', registerNewUser);

module.exports = router;