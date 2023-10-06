const router = require("express").Router();
const loggerOne = require("../middlevares/loggerOne");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.use(loggerOne);
router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.patch("/books/:books_id", updateBook);
router.delete("/books/:books_id", deleteBook);

module.exports = router;
