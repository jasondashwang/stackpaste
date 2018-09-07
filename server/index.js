
const chalk = require('chalk');
const http = require('http');
// const https = require('https');
// const appHTTPS = require('./app').App;
const appHTTP = require('./app').httpApp;


const startServers = () => {
  const httpPORT = 8000;
  // const httpsPORT = 8080;
  http.createServer(appHTTP).listen(httpPORT, () => {
    console.log(chalk.blue('http server started on port', chalk.magenta(httpPORT)));
  });

  // https.createServer(appHTTPS).listen(httpsPORT, () => {
  //   console.log(chalk.blue('https server started on port', chalk.magenta(httpsPORT)));
  // });
};

startServers();
