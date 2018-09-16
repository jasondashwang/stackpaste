
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');

mongoose.Promise = require('bluebird');

const db = mongoose.createConnection(`mongodb://localhost:27017/stackpaste`, { useNewUrlParser: true });

db.on('error', (err) => {
  if (err) throw err;
});

db.once('open', () => {
  console.log(chalk.green('MongoDB connected successfully'));
});

module.exports = db;
