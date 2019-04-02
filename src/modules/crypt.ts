// https://www.npmjs.com/package/cryptr

const bcrypt = require('bcryptjs');

export const generate = function(password) {
  // const salt = bcrypt.genSaltSync(10);
  // const hash = bcrypt.hashSync(password, salt);
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

export const validate = function(password, hash) {
  try {
    return bcrypt.compareSync(password, hash);
  } catch (error) {
    console.error(error);
  }
  return false;
};

// https://www.toptal.com/nodejs/secure-rest-api-in-nodejs

const crypto = require('crypto');

const generate2 = password => {
  const salt = crypto.randomBytes(16).toString('base64');
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
    .digest('base64');
  return salt + '$' + hash;
};

const validate2 = (password, dbhash) => {
  const [salt, orighash] = dbhash.split('$');
  const newhash = crypto
    .createHmac('sha512', salt)
    .update(password)
    .digest('base64');
  return orighash === newhash;
};

const main = () => {
  const password = 'asd';
  const hash = generate2(password);
  console.log(hash);
  console.log(validate2(password, hash));
};
if (require.main === module) {
  main();
}
