// import * as cli from "../../utils/cli"; // cannot use import as it will affect tsc.
const cli = require('./cli');

process.once('SIGINT', async () => {
  console.log('dev.ts SIGINT');
  cli.run('pm2 kill');
});
process.once('SIGTERM', async () => {
  console.log('dev.ts SIGTERM');
});

// process.once("SIGKILL", async ()) => {
//   console.log("dev.ts SIGKILL");
// });

export { };

const main = async () => {
  const port = 3001;
  // await cli.run(`lsof -i tcp:${port}`);
  // const { code, signal, response } = await cli.run(`lsof -t -i:${port}`);
  // console.log(`response =`, response.trim().split('\n'));
  // for (const id of response.trim().split('\n')) {
  //   if (id) {
  //     await cli.run(`kill ${id}`);
  //     cli.sleep(2000);
  //   }
  // }

  // await cli.run('pm2 list');
  // await cli.run('pm2 stop all');
  // await cli.run('pm2 delete all');
  await cli.run('pm2 kill');
  cli.run('pm2 start src/pm2.config.js --no-daemon --no-autorestart');

  // if (response.trim()) {
  //   await cli.run(`kill ${response.trim()}`);
  // }

  // cli.run("nodemon");

  // cli.run("ts-node src/server.ts");

  // await cli.sleep(5000); // wait for server to start
  // await cli.run(`open http://localhost:${port}`);

  // cli.run(`open http://localhost:${port}/api/users`);
  // cli.run(`open http://localhost:${port}/api/accounts`);
  // cli.run(`open http://localhost:4200`);
  // cli.run(`open http://localhost:3001/login`);
  // cli.run(`open http://localhost:3001/payment/wirecard`);
  // cli.run(`open http://localhost:3001/payment/paylah/ref/123`);
  // cli.run(`open http://localhost:3001/payment/wirecard/ref/123`);
  // cli.run(`open http://localhost:3001/weui`);
  // http://localhost:3001/api1/svg/Get%20Started
  // http://localhost:3001/api1/div/Get%20Started
  // http://localhost:3001/api1/png/Get%20Started
  // http://localhost:3001/api1/image
  // http://localhost:3001/fbbot/createorder?pageid=pageid&fbid=fbid&
  // http://localhost:3001/id/REF/100
  // http://localhost:3001/my/REF/100

  // http://localhost:3001/assets/colllection.html?ref=123
  // http://localhost:3001/test
  // await cli.run(`lt --port ${port}`);
};

if (require.main === module) {
  main();
}
/*
cd /Users/bchoii/Downloads/2018-11-18/PaymentAction_PHP_JT01_devPortal_v1.2_inquiry
php -S 127.0.0.1:8080
*/
