const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect("mongodb://localhost:27017/booksApp", (err, client) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      _db = client.db();
      cb();
    }
  });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
