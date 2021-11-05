const validatePwd = (password) => {
  if (!password) return { code: 401, message: 'All fields must be valid' };
  if (password.length === 0 || password.length < 6) {
    return { code: 401, message: 'Incorrect username or password' }
  }
  return null;
}

module.exports = {
  validatePwd,
};