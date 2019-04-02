import * as nodemailer from 'nodemailer';
import { createConnection } from 'typeorm';

export const sendEmail = async (target, subject, content) => {
  return new Promise((res, rej) => {
    console.log(`${new Date().toISOString()} createTransport`);
    const transporter = nodemailer.createTransport(
      // 'smtps://kidotech%40gmail.com:iqkzgddqexjcgaoi@smtp.gmail.com'
      'smtps://bernard%40wigle.it:zbwyasyrrvaczaiz@smtp.gmail.com'
    );

    const mailOptions = {
      from: '"Ministry of Data" <okg.support@mindat.io>', // sender address
      to: `${target}`, // list of receivers
      // bcc: `bernard@kidotech.com`,
      subject, // Subject line
      // text: content // plaintext body
      // html: "<b>Hello world 🐴</b>" // html body
      html: content, // html body
    };

    // send mail with defined transport object
    console.log(`${new Date().toISOString()} transporter.sendMail`);
    transporter.sendMail(mailOptions, (error, info) => {
      console.log(`${new Date().toISOString()}`);
      console.log({ error });
      console.log({ info });
      if (error) {
        return rej(error);
      }
      console.log('Message sent: ' + info.response);
      res(info);
    });
  });
};

const main = async () => {
  console.log('Running main.');
  const connection = await createConnection();

  const code = Date.now().toString(36);

  await sendEmail(
    `okg@wigle.it, okg.test@wigle.it`,
    // `bernard@kidotech.com`,
    `Testing email ${code} `,
    `<table>
    <tr><th></th><th>S/No</th><th>Reservation Date</th><th>Reservation Time</th></tr>
    <tr><td>Stuff</td><td>Stuff</td><td>Stuff</td></tr>
    </table>`
  );

  await connection.close();
  console.log('Done.');
};

if (require.main === module) {
  main();
}
