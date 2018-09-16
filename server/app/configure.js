
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

const loggingMiddleware = process.env.NODE_ENV === 'production' ? morgan('combined') : morgan('dev');

module.exports = (app) => {
  // Logging and compression middleware
  app.use(loggingMiddleware);

  // Parse our POST and PUT bodies.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(compression());
};
