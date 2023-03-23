var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dukamitic10@gmail.com',
    pass: 'xqjyhzxheerpxfwg'
  }
});

var mailOptions = {
  from: 'dukamitic10@gmail.com',
  to: 'dukamitic10@gmail.com',
  subject: 'Slanje mejla',
  text: 'Poruka'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});