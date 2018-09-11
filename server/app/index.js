
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const httpsApp = express();
const httpApp = express();

module.exports = {
  App: httpsApp,
  redirectApp: httpApp,
};

/*
NOTICE:

Once we get the https server up and running, httpApp will redirect to the https app routes,
in the meantime I doubled the routes so we wouldnt have to rewrite them with https.
*/


// Static and Parsing Middleware:

require('./configure')(httpApp);
require('./configure')(httpsApp);

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

// // Sends the html file for react-router to interpret anything else
httpApp.get('/*', (req, res) => {
  res.sendFile(httpApp.get('indexHTMLPath'));
});

httpsApp.get('/*', (req, res) => {
  res.sendFile(httpsApp.get('indexHTMLPath'));
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
// needs the next arg or else the middleware wont recognize the argument order
httpsApp.use((err, req, res, next) => {
  if (err.status !== 404) {
    console.error(err.message);
    console.error(err.stack);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

httpApp.use((err, req, res, next) => {
  if (err.status !== 404) {
    console.error(err.message);
    console.error(err.stack);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
