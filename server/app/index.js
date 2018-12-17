
const path = require('path');
const express = require('express');

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
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Error handling endware
app.use((err, req, res, next) => {
  if (err.status !== 404) {
    console.error(err.message);
    console.error(err.stack);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
