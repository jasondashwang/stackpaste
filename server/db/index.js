
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');

mongoose.Promise = require('bluebird');

const localURI = 'localhost:27017/stackpaste';

const connection = mongoose.createConnection(`mongodb://${localURI}`, { useNewUrlParser: true });

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
