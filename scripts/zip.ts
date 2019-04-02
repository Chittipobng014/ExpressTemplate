import { LocalDate } from 'js-joda';

// import * as path from "path";
const node_ssh = require('node-ssh');
const ssh = new node_ssh();

// const fs = require("fs-extra");
const cli = require('./cli');

const clean = async () => {
  console.log('Cleaning ...');
  await cli.run('rm -rf logs');
  await cli.run('rm -rf dist');
};

const babel = async () => {
  // await cli.run("cp -a src dist");
  // await cli.run("babel src -d dist");
};

const zip = async () => {
  console.log('zipping ...');
  const version = LocalDate.now().toString();
  await cli.run(
    [
      'zip',
      '-r',
      '-X',
      `${__dirname}/../../client-${version}.zip`,
      '../client',
      '-x ../client/node_modules/*',
      '-x ../client/package-lock.json',
    ].join(' ')
  );
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

  await cli.run(
    [
      'zip',
      '-r',
      '-X',
      `${__dirname}/../../utils-cli-${version}.zip`,
      '../utils',
      '-x node_modules/*',
      '-x package-lock.json',
    ].join(' ')
  );
};

const main = async () => {
  await clean();
  await zip();
  await cli.run(`open https://drive.kidoapps.com`);
};

if (require.main === module) {
  main();
}
