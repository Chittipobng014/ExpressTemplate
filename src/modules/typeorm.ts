import { Connection, createConnection } from 'typeorm';
// const options: ConnectionOptions = getConnectionOptions();

let connection: Connection;
const init = async () => {
  try {
    if (!connection) {
      connection = await createConnection();
      console.log('Typeorm connection has been established successfully.');
    }
  } catch (error) {
    console.log('Unable to connect to the Typeorm database:', error);
  }
};

export default {
  init,
};

// const main = async () => {
//   await init();
// };

// main();

process.on('SIGINT', async () => {
  console.info('typeorm SIGINT ...');
  await connection.close();
  console.log('Typeorm connection has been closed successfully.');
  console.info('typeorm SIGINT Done.');
});

// process.on("SIGINT", async () => {
//   console.info("typeorm.ts SIGINT ...");
//   try {
//     await close();
//   } catch (error) {}
//   console.info("typeorm.ts SIGINT Done.");
// });

// export default module;
// import { User } from "../modules/typeorm/entity/User";

//   (async () => {
//     await typeorm.init();
//     const userController = new UserController();
//     // await userController.query('drop table "user"');
//     const user = await userController.save({
//       firstName: "firstName",
//       lastName: "lastName",
//       age: 1
//     });
//     // console.log("user =", user);
//     // user.firstName = "New First Name";
//     // await userController.save(user);
//     // const all = await userController.all();
//     // for (const item of all) {
//     //   console.log(item);
//     //   console.log(await userController.remove(item.id));
//     // }
//     // console.log(all);
//     await typeorm.close();
//     console.log("Done.");
//   })();
// }

// if (require.main === module) {
//   (async () => {
//     const connection = await createConnection();
//     await connection.query(`drop table if exists "user"`);
//     // await connection.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
//     await connection.synchronize();
//     // insert new users for test
//     await connection.manager.save(
//       connection.manager.create(User, {
//         firstName: "Timber",
//         lastName: "Saw",
//         age: 27
//       })
//     );
//     await connection.manager.save(
//       connection.manager.create(User, {
//         firstName: "Phantom",
//         lastName: "Assassin",
//         age: 24
//       })
//     );
//     const results = await connection.query(`select * from "user"`);
//     console.log(results);
//     await connection.close();
//   })();
// }
