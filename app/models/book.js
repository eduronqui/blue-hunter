const mongoose = require('mongoose');

const Book = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  yearPublished: Number,
  price: String,
  rating: String
},
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
      }
    }
  });

module.exports = mongoose.model('Book', Book);