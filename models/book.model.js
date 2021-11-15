const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  author: { type: String, required: true, minlength: 3 },
  publishYear: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear(),
    default: new Date().getFullYear(),
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  lang: {
    type: String,
    min: 2,
    max: 2,
    default: "en",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book,
};
