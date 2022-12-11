//import express router
const router = require("express").Router();

// import controller
const booksController = require("../controllers/books");

// middleware
router.get("/", booksController.getAllBooks);

router.get("/add-book", booksController.getAddBook);

router.post("/add-book", booksController.postAddBook);

router.get("/delete/:id", booksController.deleteBook);

router.get("/edit/:id", booksController.getEditBook);
// exports
module.exports = router;
