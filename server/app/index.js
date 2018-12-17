
const path = require('path');
const express = require('express');

const httpApp = express();

module.exports = httpApp;

/*
NOTICE:

Once we get the https server up and running, httpApp will redirect to the https app routes,
in the meantime I doubled the routes so we wouldnt have to rewrite them with https.
*/


// Static and Parsing Middleware:

require('./configure')(httpApp);
// API routes
httpApp.use('/api', require('./api'));

// Add Auth Routes here


// // Sends the html file for react-router to interpret anything else

// Send index.html middleware
const sendIndex = (req, res) => {
  res.sendFile('index.html');
};

httpApp.get('/*', sendIndex);

// Rejects any file route
const fileReject = (req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
};

httpApp.use(fileReject);

// Error handling endware
// needs the next arg or else the middleware wont recognize the argument order
const errorHandler = (err, req, res, next) => {
  if (err.status !== 404) {
    console.error(err.message);
    console.error(err.stack);
  }
  res.status(err.status || 500).send(err.message || 'Internal server error.');
};

httpApp.use(errorHandler);
