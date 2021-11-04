const connection = require('./connection');

const findUserByEmail = async (email) => {
  try {
    const db = await connection();
    const result = await db.collection('users').findOne({
      email,
    });
    return result;
  } catch (error) {
    return { err: { code: error.code, message: error.message } }
  }
}

module.exports = {
  findUserByEmail,
}