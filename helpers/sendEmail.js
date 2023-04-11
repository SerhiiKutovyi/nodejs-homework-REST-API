const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

// const email = {
//   to: 'vash.rieltor.sergey@gmail.com',
//   from: 'wagenrex@gmail.com',
//   subject: 'Test email',
//   html: '<p><strong>Test email</strong>from localhost:3001</p>',
// };

// sgMail
//   .send(email)
//   .then(() => console.log('Ok'))
//   .catch(error => console.log(error.message));

const sendEmail = async data => {
  const email = { ...data, from: 'wagenrex@gmail.com' };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
