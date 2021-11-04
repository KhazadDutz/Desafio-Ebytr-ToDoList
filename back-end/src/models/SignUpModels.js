const connection = require('./connection');

const registerNewUser = async (email, password) => {
  const db = await connection();
  const status = await db.collection('users').insertOne(
    {
      email,
      password,
    },
  );
}

module.exports = {
  registerNewUser,
};