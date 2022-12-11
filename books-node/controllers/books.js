const { getData, setData, getId } = require("../util/util");

//import models

//get all books
exports.getAllBooks = (req, res) => {
  const books = getData();

  res.render("index", {
    pageTitle: "Home",
    books: books,
  });
};
//get add book
exports.getAddBook = (req, res) => {
  res.render("addBook", { pageTitle: "add book" });
};

//post add book
exports.postAddBook = (req, res) => {
  const books = getData();
  const book = { id: Date.now().toString(), ...req.body };
  books.push(book);

  setData(books);
  console.log(books);
  res.redirect("/");
  // res.render("addBook", { pageTitle: "add book" });
};
// get edit book
exports.getEditBook = (req, res) => {
  const books = getData();
  const book = books.find((book) => book.id === req.params.id);
  res.render("editBook", { pageTitle: "Edit Book", book: book });
};
// post edit book

//remove book
exports.deleteBook = (req, res) => {
  const books = getData();
  const bookIndex = getId(books, req.params.id);

  books.splice(bookIndex, 1);
  setData(books);
  res.redirect("/");
};
//single book
