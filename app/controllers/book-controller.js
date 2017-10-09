const Book = require('../models/book');

module.exports = {
  findAll: async (req, res) => {
    try {
      const books = await Book.find({});
      res.send(books);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  },

  findBytitle: async (req, res) => {
    try {
      let title = req.params.title;
      const books = await Book.find({ "title": { "$regex": title, "$options": "i" } });
      res.send(books);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  },

  findByAuthor: async (req, res) => {
    try {
      let author = req.params.author;
      const books = await Book.find({ "author": { "$regex": author, "$options": "i" } });
      res.send(books);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}