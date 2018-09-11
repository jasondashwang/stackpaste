
const morgan = require('morgan');
const compression = require('compression');

const loggingMiddleware = process.env.NODE_ENV === 'production' ? morgan('combined') : morgan('dev');

const appVariableConfigure = require('./appVars');
const staticMiddlewareConfigure = require('./staticMiddleware');
const parsingMiddlewareConfigure = require('./parsingMiddleware');

module.exports = (app) => {
  app.setValue = app.set.bind(app);
  app.getValue = (path) => app.get(path);
  appVariableConfigure(app);

  // Logging and compression middleware
  app.use(loggingMiddleware);
  app.use(compression());

  staticMiddlewareConfigure(app);
  parsingMiddlewareConfigure(app);
};
