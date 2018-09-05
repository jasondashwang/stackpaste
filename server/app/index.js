'use strict';
const path = require('path');
const chalk = require('chalk');
const express = require('express');
const app = express();
module.exports = app;

require('./configure')(app);

app.use('/api', require('./routes'));

app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});

app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

// For 409 (Conflict DB Errors)
app.use(function (err, req, res, next) {
  if (err.code === 11000) {
    res.status(409).send('Duplicate Database Creation Error');
  } else {
    next(err);
  }
});

app.use(function (err, req, res, next) {
    console.error(chalk.red(err), chalk.yellow(typeof next));
    console.error(chalk.red(err.stack));
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
