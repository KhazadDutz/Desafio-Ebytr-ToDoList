const { findUserByEmail } = require('../models/LoginModels');

const checkDuplicateUser = async (email) => {
  const status = await findUserByEmail(email);
  if (status) return { code: 401, message: 'Invalid email address' };
  return null;
}

module.exports = {
  checkDuplicateUser,
}

// para o signup middleware 
// const doesUserExists = await helpers.checkDuplicateUser(email);
// if (doesUserExists) {
//   return res.status(doesUserExists.code).json({ message: doesUserExists.message })
// }