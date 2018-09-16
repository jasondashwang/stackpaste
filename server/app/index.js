
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const httpsApp = express();
const httpApp = express();

const rootPath = path.join(__dirname, '../../');
const indexPath = path.join(rootPath, './dist/index.html');

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


// // Sends the html file for react-router to interpret anything else

// Send index.html middleware
const sendIndex = (req, res) => {
  res.sendFile(indexPath);
};

httpsApp.get('/*', sendIndex);
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

httpsApp.use(fileReject);
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

httpsApp.use(errorHandler);
httpApp.use(errorHandler);
