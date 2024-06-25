const AppDataSource = require('./config/db');
require('reflect-metadata');
const config = require('./config/config');
const app = require('./app');

const port = config.port || 3000;

let server;
AppDataSource.initialize()
  .then(async () => {
    server = app.listen(port, () => {
      console.log(`Listening on localhost port ${port}`);
      //   logger.info(`Documentation of API on http://localhost:${port}/api-docs`);
    });
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error, 'error occured while connecting db'));

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
