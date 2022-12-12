const dbConnect = require("../util/db");
const { ObjectId } = require("mongodb");

module.exports = class Book {
  constructor() {}

  static findOne(id, cb) {
    // let book;
    dbConnect(async (db) => {
      const book = await db
        .collection("books")
        .findOne({ _id: new ObjectId(id) });
      cb(book);
    });
    // return book;
  }
};
