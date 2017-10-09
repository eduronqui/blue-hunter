const User = require('../models/user');

module.exports = {
  findAll: async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  },

  findByName: async (req, res) => {
    try {
      const name = req.params.name;
      const users = await User.find({ "fullName": { "$regex": name, "$options": "i" } });
      res.send(users);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}