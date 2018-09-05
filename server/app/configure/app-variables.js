'use strict';

const path = require('path');
const logMiddleware = require('volleyball');

const rootPath = path.join(__dirname, '../../../');
const indexPath = path.join(rootPath, './browser/index.html');

const env = require(path.join(rootPath, './server/env'));

module.exports = (app) => {
  app.setValue('env', env);
  app.setValue('projectRoot', rootPath);
  app.setValue('indexHTMLPath', indexPath);
  app.setValue('log', logMiddleware);
};
