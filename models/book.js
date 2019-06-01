const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, default: "Unknown Author"},
  description: { type: String, default: "No description available." },
  image: { type: String, default: "https://placeholder.pics/svg/128x205/DEDEDE/555555/%3F"},
  link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
