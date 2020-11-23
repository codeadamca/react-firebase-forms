const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

exports.submit = functions.https.onRequest((req, res) => {

  cors(req, res, () => {

    var name = req.body.name ? req.body.name : 'missing';
    var email = req.body.email ? req.body.email : 'missing';
    var subject = req.body.subject ? req.body.subject : 'missing';
    var message = req.body.message ? req.body.message : 'missing';

    const send = require('gmail-send')({
      user: 'email@gmail.com',
      pass: 'gmail-password',
      to:   'email@gmail.com',
      subject: 'Contact Form Submission',
    });

    var completeMessage = `You have received a contact form submission:
    
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    send({text: completeMessage});

    res.write('{"status":"complete","name":"'+name+'","email":"'+email+'"}');

    res.status(200).end();
 
  });
});
