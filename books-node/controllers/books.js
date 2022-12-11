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
  res.render("addBook", { pageTitle: "Add new Book" });
};

//post add book
exports.postAddBook = (req, res) => {
  const books = getData();
  const book = { id: Date.now().toString(), ...req.body };
  books.push(book);

  setData(books);
  console.log(books);
  res.redirect("/");
};
// get edit book
exports.getEditBook = (req, res) => {
  const books = getData();
  const book = books.find((book) => book.id === req.params.id);
  res.render("editBook", { pageTitle: "Edit Book", book: book, num:"22" });
};
// post edit book
exports.postEditBook = (req, res) => {
  const books = getData();
  const bookIndex = getId(books, req.body.id);
  console.log(bookIndex)
  if (bookIndex != -1) {
    const book = {...req.body}
    books[bookIndex] = book
    setData(books)
    console.log(book,books)
  }
  res.redirect('/')

};

//remove book
exports.deleteBook = (req, res) => {
  const books = getData();
  const bookIndex = getId(books, req.params.id);

  books.splice(bookIndex, 1);
  setData(books);
  res.redirect("/");
};
//search book
exports.searchByName = (req,res) => {
  console.log('search......')
  // console.log(req)
  const books = getData();
  const sTitle = req.body.title;
  const b = books.find(b=>b.title = sTitle)

  res.render("show", { pageTitle: "!!", book: b });
}