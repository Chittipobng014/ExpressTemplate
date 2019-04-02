import { LocalDateTime } from 'js-joda';
import { config } from '../src/config';
import { remote } from './remote';

const fs = require('fs-extra');
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

const tsc = async () => {
  console.log('tsc ...');
  await cli.run('tsc');
  fs.copySync('package.json', 'dist/package.json');
  fs.copySync('package-lock.json', 'dist/package-lock.json');
  fs.copySync('static', 'dist/static');
  // json files
  fs.copySync('src', 'dist/src', {
    filter: src => fs.statSync(src).isDirectory() || src.endsWith('.json'),
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
      `/Users/bchoii/Downloads/server-${version}.zip`,
      '.',
      '-x node_modules/*',
      '-x package-lock.json',
      // "-x src/*"
    ].join(' ')
  );

  // await cli.run(
  //   [
  //     'zip',
  //     '-r',
  //     '-X',
  //     `/Users/bchoii/Downloads/nodejs-v2.zip`,
  //     '.'
  //     // '-x node_modules/*',
  //     // '-x package-lock.json',
  //     // '-x nodemon.json'
  //   ].join(' '),
  //   { cwd: '../../../Downloads/nodejs-v1' }
  // );
};

const tar = async () => {
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
      '/Users/bchoii/Downloads/server.tar.gz',
      '.',
    ].join(' '),
    { cwd: './dist' }
  );
};

const upload = async path => {
  console.log('uploading ...');
  const { code, signal, response } = await cli.run(
    `curl -F files=@${path} https://asd:asd@drive.kidoapps.com/upload`
  );

  // curl -F files=@mongod.log https://asd:asd@drive.kidoapps.com/upload -k

  console.log('upload response', response);
  return 'https://asd:asd@drive.kidoapps.com/' + JSON.parse(response)[0].path;
};

const main = async () => {
  await cli.run(`open https://${config.host}`);
  // await cli.run(`open https://m.me/956042381234194`);
  await clean();
  await tsc();
  await tar();
  const path = await upload('/Users/bchoii/Downloads/server.tar.gz');
  await cli.run(`open https://asd:asd@drive.kidoapps.com`);
  await remote();
  cli._pbcopy(`#sudo -i
pm2 delete all
curl -O -k ${path} 
curl -k https://asd:asd@drive.kidoapps.com/x
#rm -rf server
mkdir -p server && tar -xzvf server.tar.gz -C $_
rm server.tar.gz
cd server
mv ormconfig.prod.js ormconfig.js
mv src/config.prod.js src/config.js
# npm install ...
#npm install --production
#npm install sanitize-html
pm2 start src/pm2.prod.config.js
pm2 save
exit
#exit
`);

  // await cli.run("ts-node scripts/remote.ts");

  // await cli.run(
  //   'open -a Chrome https://ap-southeast-1.console.aws.amazon.com/elasticbeanstalk/home?region=ap-southeast-1#/environment/dashboard?applicationName=test1&environmentId=e-66jp2kqcrw'
  // );
  // await cli.run(`open http://${config.host}`);
  // await clean();
  // await zip();
  // await babel();
  // await zip();
  // await tar();
  // const path = await upload('/Users/bchoii/Downloads/server.tar.gz');
  // console.log('path = ', path);
  // const commands = await uploadSh(path);
  // await cli.run(`open https://asd:asd@drive.kidoapps.com`);
  // await cli.run('node remote.js');
  // cli._pbcopy(commands);
  // console.log(config.host);
};

if (require.main === module) {
  main();
}
