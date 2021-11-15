const express = require("express");
const router = express.Router();
const {
  addBook,
  getAllBooks,
  getBooksByPublishYear,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

/** Get All Books */
router.get("/", (req, res) => {
  getAllBooks(req, res);
});

/** Get Books by published year */
router.get("/:publishYear", (req, res) => {
  getBooksByPublishYear(req, res);
});
/** Create Book */
router.post("/", (req, res) => {
  addBook(req, res);
});

/** Update Book Rating */
router.put("/:bookId", (req, res) => {
  updateBook(req, res);
});

router.delete("/:bookId", (req, res) => {
  deleteBook(req, res);
});

module.exports = router;
