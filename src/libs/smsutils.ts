import Axios from 'axios';

// import * as rp from 'request-promise';

// const https = require('https');

export const sendNexmo = async (from, to, text) => {
  const results = (await Axios.post('https://rest.nexmo.com/sms/json', {
    from,
    to,
    text,
    api_key: 'a9009ec5',
    api_secret: '905112481e4bb559',
  })).data;
  console.log(results);
  return results;
};

export const sendClickatell = async (to, text) => {
  try {
    const results = (await Axios.post(
      'https://api.clickatell.com/rest/message',
      {
        text,
        to: [to],
      },
      {
        headers: {
          'X-Version': 1,
          Authorization:
            'bearer mtX9fMb3uoTNMtTlhnvc0NfKeL8cwERM2dcBMWu.Z3X4.zv5OMCnpZiqqmyppUnmehD665kAK.KE06X',
        },
      }
    )).data;
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const sendSms = async (from, to, text) => {
  // console.log("sending sms", from, to, text);
  // console.log(text.length);
  // return await sendNexmo(from, to, text);
  return await sendClickatell(to, text);
};

const main = async () => {
  const result = await sendSms(
    `${Date.now().toString(36)}`,
    '6596693329',
    `test ${Date.now().toString(36)}`
  );
  console.log(JSON.stringify(result));
};

if (require.main === module) {
  main();
}
