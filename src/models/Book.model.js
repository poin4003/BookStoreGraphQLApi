const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    requried: true
  },
  createOn: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  numberOfPages: {
    type: Number,
    required: true
  },
  numberOfChapters: {
    type: Number,
    required: true
  },
  numberOfWords: {
    type: Number,
    required: true
  },
  view: {
    type: Number,
    default: 0
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);