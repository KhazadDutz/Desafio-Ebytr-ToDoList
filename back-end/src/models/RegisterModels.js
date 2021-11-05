const connection = require('./connection');

const registerNewUser = async (email, password) => {
  try {
    const db = await connection();
    await db.collection('users').insertOne(
      {
        email,
        password,
      },
    );
    return { ok: { code: 200, message: 'New user added' } };
  } catch (error) {
    return { err: { code: error.code, message: error.message } }
  }
}

module.exports = {
  registerNewUser,
};