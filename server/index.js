const logger = require('heroku-logger');
const http = require('http');
const httpApp = require('./app');

// Start the Database
require('./db');

const httpPORT = process.env.PORT || 8080;

http.createServer(httpApp).listen(httpPORT, () => {
  logger.info('Starting server', { port: httpPORT });
});
