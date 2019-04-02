// const WebSocket = require('ws');
import * as WebSocket from 'ws';

// https://github.com/websockets/ws

export const wsinit = server => {
  const wss = new WebSocket.Server({ server });
  wss.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;
    console.log(`connection opened from ${ip}, ${req.url}`);

    ws.on('close', function close() {
      console.log('Connection closed');
    });

    ws.on('message', function incoming(data) {
      console.log('received', JSON.parse(data));
      ws.send(data);
    });
  });
};

// // websocket stuff

// let index = 0;

// let wsServer;
// const init = server => {
//   wsServer = require('socket.io')(server);
//   wsServer.on('connection', wsClient => {
//     wsClient.name = `client #${index++}`;
//     console.log(`${wsClient.name} connected`);
//     wsClient.on('ping', (message, ack) => {
//       console.log('ping');
//       console.log({ message, ack });
//       if (ack) {
//         ack(`ping-ack-${Date.now()}`);
//       }
//       // send to self only
//       wsClient.emit('pong', { source: wsClient.name, message });
//     });
//     wsClient.on('echo', (message, ack) => {
//       if (ack) {
//         ack(`ack-${Date.now().toString(36)}`);
//       }
//       // send to self only
//       wsClient.emit('echo', { source: wsClient.name, message });
//     });
//     wsClient.on('broadcast', (message, ack) => {
//       if (ack) {
//         ack(`ack-${Date.now().toString(36)}`);
//       }
//       wsClient.broadcast.emit('broadcast', { source: wsClient.name, message }); // send to everyone, excluding self
//     });
//     wsClient.on('disconnect', () => {
//       // send to everyone, including self
//       console.log(`${wsClient.name} disconnected.`);
//       wsServer.emit('broadcast', {
//         source: 'server',
//         message: `${wsClient.name} disconnected.`,
//       });
//     });
//     // send to everyone, including self
//     wsServer.emit('broadcast', {
//       source: 'server',
//       message: `${wsClient.name} has connected.`,
//     });
//     // send to self only
//     wsClient.emit('welcome', {
//       source: 'server',
//       message: `Hi. You are ${wsClient.name}.`,
//     });
//   });
// };

// export default init;

// process.on('SIGINT', async () => {
//   console.info('wsServer.ts SIGINT ...');
//   await wsServer.close();
//   console.info('wsServer.ts SIGINT Done.');
// });
