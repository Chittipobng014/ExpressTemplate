import { CronJob } from 'cron';
import { createConnection } from 'typeorm';
// import { sendEmailReservationsToMerchants } from './libs/cron/sendEmailReservationsToMerchants';

// morning email
new CronJob('0 0 9 * * *', async () => {
  console.log(`${new Date().toISOString()} sendEmailReservationsToMerchants`);
  const connection = await createConnection();
  // await sendEmailReservationsToMerchants();
  await connection.close();
}).start();

console.log(`cron started.`);

// const tick = async () => {
//   console.log(`${new Date().toISOString()} tick`);
//   const hour = new Date().getHours();
//   // console.log();
//   // await new Promise(r => setTimeout(r, 5000));

//   const connection = await createConnection();
//   console.log(`${new Date().toISOString()} connection`);
//   await sendEmailReservationsToMerchants();
//   console.log(`${new Date().toISOString()} sendEmailReservationsToMerchants`);
//   await connection.close();
//   console.log(`${new Date().toISOString()} close`);
//   setTimeout(tick, 3 * 60 * 1000); // 3 mins
//   console.log(`${new Date().toISOString()} setTimeout`);

//   // if (hour === 18) {
//   //   const connection = await createConnection();
//   //   await sendEmailReservationsToMerchants();
//   //   await connection.close();
//   // }
//   // setTimeout(tick, 60 * 60 * 1000); // next hour
// };

// setTimeout(tick, 30 * 1000); // 30 seconds

// // const main = async () => {
// //   const connection = await createConnection();
// //   await tick();
// //   await connection.close();
// // };

// // if (require.main === module) {
// //   main();
// // }
