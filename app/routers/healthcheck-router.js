module.exports = (app) => {
  app.get('/healthcheck', (req, res) => {
    res.send({
      api: 'ok',
      tagline: 'I\'m Batman!'
    });
  });
}
