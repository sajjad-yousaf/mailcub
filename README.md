# Mailcub Package Documentation
Version: 1.0.0

## Introduction
Mailcub is an npm package that enables you to send emails using a simple and straightforward interface. It provides a function to send emails with the following features:

## Sending HTML emails.
Attaching files to emails.
Sending emails with a secret key for authentication.

## Installation
To install the "mailcub" package, use npm:

```bash

npm install mailcub

```

## Usage
### Import the Package
You can import the "mailcub" package in your Node.js application as follows:

```javascript
const mailcub = require('mailcub');
```

### Sending an Email
To send an email, use the sendMail function with the following parameters:

- body (Object): An object containing the email details.
- key (String): The secret key for authentication.


```javascript
const emailBody = {
  email_from: 'Done@mailcub.com',
  reciever: 'alisaad.dev@gmail.com',
  subject: 'Dynamite',
  html: '<h1>Hello</h1>',
  attachment: 'attachment_path',
};

const secretKey = 'your-secret-key';

mailcub.sendMail(emailBody, secretKey)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
```

## Parameters
- body (Object):

    - email_from (String): The sender's email address.
    - reciever (String): The recipient's email address.
    - subject (String): The email subject.
    - html (String): The HTML content of the email.
    - attachment (String): The path to an attachment file.
- key (String): The secret key for authentication. You can obtain this key from console.mailcub.com.

## Support and Issues
If you encounter any issues or have questions, please contact our support team at support@mailcub.com.

## License
This package is distributed under the MIT License. See the LICENSE file for details.

## Release Notes
- 1.0.0 (2023-10-17): Initial release of the Mailcub package.
