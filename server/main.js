'use strict';

const chalk = require('chalk');
const startDb = require('./db');
const server = require('http').createServer();

const createApplication = () => {
  const app = require('./app');
  server.on('request', app);
};

const startServer = () => {
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
  });
};

if (process.env.NO_DATABASE) {
  console.log(chalk.green('No Database connection!'));
} else {
  startDb
  .then(createApplication)
  .then(startServer)
  .catch(err => {
    console.error(chalk.red(err.stack));
    process.exit(1);
  });
}
