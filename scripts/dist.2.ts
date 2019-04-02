// import * as fs from 'fs-extra';
// import { LocalDateTime } from 'js-joda';
// import { config } from '../src/config';

// // import * as path from "path";
// const node_ssh = require('node-ssh');
// const ssh = new node_ssh();

// // const fs = require("fs-extra");
// const cli = require('../../utils/cli');

// const clean = async () => {
//   console.log('Cleaning ...');
//   await cli.run('rm -rf logs');
//   await cli.run('rm -rf dist');
// };

// const babel = async () => {
//   // await cli.run("cp -a src dist");
//   // await cli.run("babel src -d dist");
// };

// const tsc = async () => {
//   console.log('tsc ...');
//   await cli.run('tsc');
//   fs.copySync('package.json', 'dist/package.json');
//   fs.copySync('package-lock.json', 'dist/package-lock.json');
//   fs.copySync('static', 'dist/static');
//   // json files
//   fs.copySync('src', 'dist/src', {
//     filter: src => fs.statSync(src).isDirectory() || src.endsWith('.json'),
//   });
// };

// const zip = async () => {
//   console.log('zipping ...');
//   const version = LocalDateTime.now().toString();
//   await cli.run(
//     [
//       'zip',
//       '-r',
//       '-X',
//       `/Users/bchoii/Downloads/server-${version}.zip`,
//       '.',
//       '-x node_modules/*',
//       '-x package-lock.json',
//     ].join(' ')
//   );
// };

// const tar = async target => {
//   console.log('tarring ...');
//   await cli.run(
//     [
//       'tar',
//       '--exclude=.DS_Store',
//       '--exclude=./.vscode',
//       '--exclude=./scripts',
//       '--exclude=./node_modules',
//       // "--exclude=./src",
//       '-czvf',
//       target,
//       '.',
//     ].join(' '),
//     { cwd: './dist' }
//   );
// };

// const deploy = async file => {
//   const connection = await ssh.connect({
//     host: config.host,
//     username: 'root',
//     password: config.password,
//   });
//   await ssh.putFiles([
//     {
//       local: file,
//       remote: '/root/server.tar.gz',
//     },
//   ]);
//   for (const command of [
//     'pm2 list',
//     'pm2 delete all',
//     // "rm -rf server",
//     'mkdir -p server',
//     'tar -xzvf server.tar.gz -C server',
//     'rm server.tar.gz',
//   ]) {
//     console.log((await ssh.execCommand(command)).stdout);
//   }

//   for (const command of [
//     'mv ormconfig.prod.js ormconfig.js',
//     'mv src/config.prod.js src/config.js',
//     // "npm install --production",
//     // 'npm install nodemailer',
//     // 'npm install cron',
//     'pm2 start src/pm2.prod.config.js',
//     'pm2 save',
//   ]) {
//     console.log((await ssh.execCommand(command, { cwd: 'server' })).stdout);
//   }

//   connection.dispose();
// };

// const main = async () => {
//   // await cli.run(`open https://${config.host}`);
//   await clean();
//   await tsc();
//   await tar('/Users/bchoii/Downloads/server.tar.gz');
//   await deploy('/Users/bchoii/Downloads/server.tar.gz');
// };

// if (require.main === module) {
//   main();
// }

// // https://m.me/956042381234194

// // https://m.me/475830132825214
// // https://orderbot.kidoapps.com/api1/div/Test
// // https://orderbot.kidoapps.com/api1/png/Test
