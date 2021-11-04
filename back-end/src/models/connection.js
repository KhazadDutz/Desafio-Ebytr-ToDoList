const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/EbytrTasks';
const DB_NAME = 'EbytrTasks';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db;
async function connection() {
  if (db) return Promise.resolve(db);
  return MongoClient
    .connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = connection;