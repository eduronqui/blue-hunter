const User = require('../models/user');
const Book = require('../models/book');

module.exports = async function seed() {
  if (!await User.count({})) {
    const users = require('./users.json');
    console.info('Seeding users...');
    await User.insertMany(users);
    console.info('Users seed completed!');
  }

  if (!await Book.count({})) {
    const books = require('./books.json');
    console.info('Seeding books...');
    await Book.insertMany(books);
    console.info('Books seed completed!');
  }
}
