
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');

const ENV_VARIABLES = require(path.join(__dirname, '../env'));


const DATABASE_URI = ENV_VARIABLES.DATABASE_URI;

// const options = {

// };

mongoose.Promise = require('bluebird');

const db = mongoose.createConnection(`mongodb://${DATABASE_URI}`);

db.on('error', (err) => {
  if (err) throw err;
});

db.once('open', () => {
  console.log(chalk.green('MongoDB connected successfully'));
});

module.exports = db;
