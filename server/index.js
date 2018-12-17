
const chalk = require('chalk');
const http = require('http');
const httpApp = require('./app');

// Start the Database
require('./db');

const httpPORT = process.env.PORT || 8080;

http.createServer(httpApp).listen(httpPORT, () => {
  console.log(chalk.blue(`Server started at http://localhost:${httpPORT}`));
});
