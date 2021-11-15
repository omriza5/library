const { Book } = require("../models/book.model");
const Joi = require("joi");

const addBook = async (req, res) => {
  const { error } = bookValidationSchema.validate(req.body);

  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).send(errorMessage);
  }

  try {
    const book = new Book(req.body);
    await book.save();
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send("Somthing Went Wrong.");
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send("Somthing Went Wrong.");
  }
};

const getBooksByPublishYear = async (req, res) => {
  const publishYear = parseInt(req.params.publishYear);

  try {
    const books = await Book.find({ publishYear });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send("Somthing Went Wrong.");
  }
};

const updateBook = async (req, res) => {
  const bookId = req.params.bookId;
  const rating = req.body.rating;

  try {
    const book = await Book.findById({ _id: bookId });
    book.rating = rating;
    book.save();

    res.send(book);
  } catch (error) {
    res.status(500).send("Somthing Went Wrong.");
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findOneAndDelete({ _id: bookId });

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

const bookValidationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  publishYear: Joi.number().min(1900).max(new Date().getFullYear()),
  rating: Joi.number().min(0).max(5),
  lang: Joi.string().min(2).max(2),
});

module.exports = {
  addBook,
  getAllBooks,
  getBooksByPublishYear,
  updateBook,
  deleteBook,
};
