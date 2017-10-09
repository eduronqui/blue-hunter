const mongoose = require('mongoose');

const User = new mongoose.Schema({
  id: Number,
  fullName: String,
  gender: String,
  age: Number,
  email: String,
  phone: String,
  username: String
},
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
      }
    }
  });

module.exports = mongoose.model('User', User);