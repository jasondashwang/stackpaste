
const mongoose = require('mongoose');
const logger = require('heroku-logger');
mongoose.Promise = require('bluebird');

const localURI = process.env.DATABASE_URI || 'mongodb://localhost:27017/stackpaste';

const connection = mongoose.connect(`${localURI}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: 'stackpaste-dev',
});

connection
  .then((db) => {
    logger.info('Successfully connected to MongoDB');
    return db;
  })
  .catch((err) => {
    if (err.message.code === 'ETIMEDOUT') {
      logger.error('Attempting to re-establish database connection.', err);
      mongoose.connect(`mongodb://${localURI}`);
    } else {
      logger.error('Error while attempting to connect to database!', err);
    }
  });

module.exports = connection;
