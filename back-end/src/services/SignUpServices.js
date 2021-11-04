const SignUpModels = require('../models/SignUpModels');

const registerNewUser = async (email, password) => {
  await SignUpModels.registerNewUser(email, password);;
}

module.exports = {
  registerNewUser,
};