import { config } from '../src/config';
const cli = require('./cli');

export async function remote() {
  cli.run('open -a Terminal');
  await cli.sleep(500);
  cli.keyTap('n', ['command']);
  // cli.keyTap("t", ["command"]);
  await cli.sleep(500);

  // cli.run(`chmod 400 "${__dirname}/newsletterorderbotorg.pem"`);

  cli._pbcopy(
    `ssh -i "${__dirname}/newsletterorderbotorg.pem" ubuntu@${config.host}`
  );

  // );
  await cli.sleep(500);
  cli.keyTap('v', ['command']);
  cli.keyTap('enter');

  // cli._pbcopy(`ssh root@${config.host}`);
  // await cli.sleep(500);
  // cli.keyTap("v", ["command"]);
  // cli.keyTap("enter");
  // await cli.sleep(2000);
  // cli.type(`${config.password}`);
  // cli.keyTap("enter");
}

if (require.main === module) {
  remote();
}
