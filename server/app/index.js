
const path = require('path');
const express = require('express');

const httpsApp = express();
const httpApp = express();

module.exports = {
  App: httpsApp,
  httpApp: httpApp,
};

/*
NOTICE:

Once we get the https server up and running, httpApp will redirect to the https app routes,
in the meantime I doubled the routes so we wouldnt have to rewrite them with https.
*/
// API routes
httpsApp.use('/api', require('./api'));
httpApp.use('/api', require('./api'));

// Add Auth Routes here

// Rejects any file route
httpsApp.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

httpApp.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Error handling endware
httpsApp.use((err, req, res) => {
  if (err.status !== 404) {
    console.error(err.message);
    console.error(err.stack);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

httpApp.use((err, req, res) => {
  if (err.status !== 404) {
    console.error(err.message);
    console.error(err.stack);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
