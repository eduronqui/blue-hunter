const { Router } = require('express');
const controller = require('../controllers/book-controller');

module.exports = (app) => {
  app.use('/book',
    Router()
      .get('/', controller.findAll)
      .get('/by-title/:title', controller.findBytitle)
      .get('/by-author/:author', controller.findByAuthor));
}