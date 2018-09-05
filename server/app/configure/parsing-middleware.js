'use strict';

const bodyParser = require('body-parser');

module.exports = (app) => {

  // Parse our POST and PUT bodies.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

};
