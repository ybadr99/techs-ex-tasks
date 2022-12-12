const { getData, setData, getId } = require("../util/util");

const { getDb } = require("../util/db");
const { ObjectId } = require("mongodb");

//import models
const Book = require("../models/book");

//get all books
exports.getAllBooks = async (req, res) => {
  const db = getDb();
  const books = await db.collection("books").find().toArray();
  // console.log(books);
  res.render("index", {
    pageTitle: "Home",
    books: books,
  });
};
//get add book
exports.getAddBook = (req, res) => {
  res.render("addBook", { pageTitle: "Add new Book" });
};

//post add book
exports.postAddBook = async (req, res) => {
  try {
    const book = { id: Date.now().toString(), ...req.body };
    const db = getDb();

    await db.collection("books").insertOne(book);
    res.redirect("/");
  } catch (error) {
    throw error;
  }
};
// get edit book
exports.getEditBook = async (req, res) => {
  const db = getDb();
  const book = await db
    .collection("books")
    .findOne({ _id: new ObjectId(req.params.id) });
  res.render("editBook", { pageTitle: "Edit Book", book: book });
};
// post edit book
exports.postEditBook = async (req, res) => {
  try {
    const db = getDb();
    await db
      .collection("books")
      .updateOne({ _id: new ObjectId(req.body.id) }, { $set: req.body });

    res.redirect("/");
  } catch (error) {
    throw error;
  }
};

//remove book
exports.deleteBook = async (req, res) => {
  try {
    const db = getDb();
    await db
      .collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.redirect("/");
  } catch (e) {
    throw e;
  }
};
//search book
exports.searchByName = (req, res) => {
  console.log("search......");
};

exports.singleBook = async (req, res) => {
  try {
    const db = getDb();
    const book = await db
      .collection("books")
      .findOne({ _id: new ObjectId(req.params.id) });
    res.render("book", { pageTitle: "Single Book", book: book });
  } catch (error) {
    throw error;
  }
};
