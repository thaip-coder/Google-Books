const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: { type: String, required: true},
    description: String,
    image: String,
    link: String,
    title: {type: String, required: true}
});

const book = mongoose.model("book", bookSchema);

module.exports = book;