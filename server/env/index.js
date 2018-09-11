
const path = require('path');

const localConfigPath = path.join(__dirname, './local');
const devConfigPath = path.join(__dirname, './dev');
const productionConfigPath = path.join(__dirname, './prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = require(productionConfigPath);
} else if (process.env.NODE_ENV === 'dev') {
  module.exports = require(devConfigPath);
} else {
  module.exports = require(localConfigPath);
}
