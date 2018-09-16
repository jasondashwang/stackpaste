
const chalk = require('chalk');
const http = require('http');
// const https = require('https');
// const httpsApp = require('./app').App;
const httpApp = require('./app').redirectApp;

// Start the Database
require('./db');

const httpPORT = 8000;
// const httpsPORT = 8080;


http.createServer(httpApp).listen(httpPORT, () => {
  console.log(chalk.blue(`Server started at http://localhost:${httpPORT}`));
});

// https.createServer(httpsApp).listen(httpsPORT, () => {
//   console.log(chalk.blue('https server started on port', chalk.magenta(httpsPORT)));
// });
