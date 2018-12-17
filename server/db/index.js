
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');

mongoose.Promise = require('bluebird');

const localURI = process.env.DATABASE_URI || 'mongodb://localhost:27017/stackpaste';

const connection = mongoose.connect(`${localURI}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: 'stackpaste-dev',
});

connection
  .then((db) => {
    console.log(`Successfully connected to ${localURI}`);
    return db;
  })
  .catch((err) => {
    if (err.message.code === 'ETIMEDOUT') {
      console.log(chalk.red('Attempting to re-establish database connection.'));
      mongoose.connect(`mongodb://${localURI}`);
    } else {
      console.log(chalk.red('Error while attempting to connect to database:'));
      console.error(err);
    }
  });

module.exports = connection;
