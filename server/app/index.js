
const path = require('path');
const express = require('express');
const logger = require('heroku-logger');

const app = express();

module.exports = app;

// Static and Parsing Middleware:
require('./configure')(app);

// API routes
app.use('/api', require('./api'));

app.get('/*', (req, res) => {
  res.sendFile(app.get('indexPath'));
});

// 404 middleware
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error(`${req.path} was not found`);
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Error handling endware
app.use((err, req, res, next) => {
  if (err.status !== 404) {
    logger.error('Server error!', err);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
