import * as http from 'http';
import 'reflect-metadata';
import app from './app';
import typeorm from './modules/typeorm';
import { wsinit } from './modules/wsserver';

const port = 3001;
const server = http.createServer(app);

wsinit(server);

// const sockjsserver = sockjs.createServer();
// sockjsserver.on('connection', conn => {
//   console.log('connection opened');
//   conn.on('data', message => {
//     console.log('data', message);
//     conn.write(message);
//   });
//   conn.on('close', () => {
//     console.log('close');
//   });
// });
// // sockjsserver.attach(server);
// sockjsserver.installHandlers(server, { prefix: '/sockjs' });

server.on('error', onError);
server.on('listening', onListening);
server.listen(port, '0.0.0.0', () => {
  console.log(`Express server has started on port ${port}.`);
});

typeorm.init();

// ----

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  // debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}

const close = async () => {
  if (server) {
    await server.close(() => {
      console.log('server closed ...');
    });
  }
};

process.on('SIGINT', async () => {
  console.info('server.ts SIGINT ...');
  await close();
  console.info('server.ts SIGINT Done.');
});

// https://expressjs.com/en/advanced/best-practice-performance.html
// process.on('uncaughtException', async err => {
//   console.info('server.ts uncaughtException ...');
//   console.error(err);
//   await close();
//   console.info('server.ts uncaughtException Done.');
// });
