import { copySync, statSync, writeFileSync } from 'fs-extra';
import { LocalDateTime } from 'js-joda';
import { config } from '../src/config';
import { uuid } from '../src/libs/uuidutils';

import node_ssh = require('node-ssh');
const ssh = new node_ssh();

const cli = require('./cli');

const updateJwtsecret = async () => {
  writeFileSync('src/jwtsecret.json', JSON.stringify(uuid()));
};

const clean = async () => {
  console.log('Cleaning ...');
  await cli.run('rm -rf logs');
  await cli.run('rm -rf dist');
};

const babel = async () => {
  // await cli.run("cp -a src dist");
  // await cli.run("babel src -d dist");
};

const tsc = async () => {
  console.log('tsc ...');
  // { stdio: 'inherit' }
  await cli.run('tsc');
  copySync('package.json', 'dist/package.json');
  copySync('package-lock.json', 'dist/package-lock.json');
  copySync('static', 'dist/static');
  // json files
  copySync('src', 'dist/src', {
    filter: src =>
      statSync(src).isDirectory() ||
      src.endsWith('.json') ||
      src.endsWith('.php'),
  });
};

const zip = async () => {
  console.log('zipping ...');
  const version = LocalDateTime.now().toString();
  await cli.run(
    [
      'zip',
      '-r',
      '-X',
      `${__dirname}/../../server-${version}.zip`,
      '.',
      '-x node_modules/*',
      '-x package-lock.json',
    ].join(' ')
  );
};

const tar = async target => {
  console.log('tarring ...');
  await cli.run(
    [
      'tar',
      '--exclude=.DS_Store',
      '--exclude=./.vscode',
      '--exclude=./scripts',
      '--exclude=./node_modules',
      // "--exclude=./src",
      '-czvf',
      target,
      '.',
    ].join(' '),
    { cwd: './dist' }
  );
};

const deploy = async file => {
  const connection = await ssh.connect({
    host: config.host,
    username: 'ubuntu',
    privateKey: `${__dirname}/newsletterorderbotorg.pem`,
    // privateKey: '/Users/bchoii/dev/pem/aws.pem',
    // privateKey: '/Users/bchoii/dev/pem/GrabKeyPair.pem',
  });
  await ssh.putFiles([
    {
      local: file,
      remote: '/home/ubuntu/server.tar.gz',
    },
  ]);
  for (const command of [
    'sudo pm2 list',
    'sudo pm2 delete all',
    // 'rm -rf server',
    'mkdir -p server',
    'tar -xzvf server.tar.gz -C server',
    'rm server.tar.gz',
  ]) {
    console.log((await ssh.execCommand(command)).stdout);
  }

  for (const command of [
    'mv ormconfig.prod.js ormconfig.js',
    'mv src/config.prod.js src/config.js',
    'sudo npm install --production',
    // 'sudo npm install',
    // 'sudo npm install fs-extra',
    'sudo pm2 start src/pm2.prod.config.js',
    'sudo pm2 save',
  ]) {
    console.log((await ssh.execCommand(command, { cwd: 'server' })).stdout);
  }

  connection.dispose();
};

const main = async () => {
  await updateJwtsecret();
  await clean();
  await tsc();
  await tar(`${__dirname}/../../server.tar.gz`);
  await deploy(`${__dirname}/../../server.tar.gz`);
  // await cli.run(`open http://localhost:4200/admin`);
  // await cli.run(`open https://${config.host}`);
};

if (require.main === module) {
  main();
}
