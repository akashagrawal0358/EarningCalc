const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
//const sendMail = require('./controllers/sendmail')



const PORT = process.env.PORT || 8000 ;
const app = express();
// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()) ;



// Start the Express server
app.listen( PORT , () => {
  console.log('Server is running on port 8000');
});


// Configure Nodemailer
const transporter = nodemailer.createTransport({
  name : 'smtp.ethereal.email ',
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'gina27@ethereal.email',
    pass: 'zuMByYBGAMrnJpUGDx'
  },
  sendMail : true,
});

// Create an API endpoint to handle form submissions
app.post('/submitCallbackRequest', (req, res) => {
  // Extract form data from the request
  const { name, mobile  } = req.body;
  console.log(req.body);

  // Define email content
  const emailContent = `
    Callback Request Details:
    Name: ${name}
    Mobile: ${mobile}
  `;

  // Define email options
  const mailOptions = {
    from: " 'akash' < silva12akash@gmail.com >",
    to: 'akashagrawal0358@gmail.com',
    subject: 'Callback Request',
    text: emailContent ,
  };

  // Send the email
  let info = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info);
      res.status(200).send('Email sent successfully');
    }
  });
  
});


app.get('/submitCallbackRequest', (req, res) => {
  // Extract data from the URL query parameters
  const name = req.query.name; // Assuming the URL has a query parameter named 'name'
  const mobile = req.query.mobile; // Assuming the URL has a query parameter named 'mobile'

  // Process the received data as needed
  // For example, you can log the data:
  const responseMessage = `Received data: Name=${name}, Mobile=${mobile}`;
  res.send(responseMessage);

  
  // Here, you can add code to handle the received data, such as sending emails or performing other actions.
});

