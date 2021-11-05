const validateEmail = (email) => {
  const validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
  );
  const validEmail = validRegex.test(email);
  if (!email) return { code: 401, message: 'All fields must be valid' };
  if (!validEmail) return { code: 401, message: 'Incorrect username or password' };
  return null;
};

module.exports = {
  validateEmail,
};