const { Router } = require('express');
const controller = require('../controllers/user-controller');

module.exports = (app) => {
  app.use('/user',
    Router()
      .get('/', controller.findAll)
      .get('/by-name/:name', controller.findByName));
}
