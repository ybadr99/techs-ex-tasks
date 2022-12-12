//import express router
const router = require("express").Router();

// import controller
const booksController = require("../controllers/books");

// middlewares

router.get("/", booksController.getAllBooks);

router.get("/book/:id", booksController.singleBook);

router.get("/add-book", booksController.getAddBook);
router.post("/add-book", booksController.postAddBook);

router.get("/edit/:id", booksController.getEditBook);
router.post("/edit/", booksController.postEditBook);

router.get("/delete/:id", booksController.deleteBook);

router.post("/search/", booksController.searchByName);

// exports
module.exports = router;
