const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


// api routes
router.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});

router.post('/html/codes/html_form_handler.cfm', (req, res) => {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bishal4shahi@gmail.com',
            pass: 'bnup vltp gdlh tkji'
        }
    });

    //sending mail options

    var mailOptions = {
        from: 'bishal4shahi@gmail.com',
        to: req.body.email,
        subject: 'Your appointment form has been submitted',
        text: req.body.comments,
        html: `<html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title></title>
          <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css'>
          <style>
            @import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
            @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
          </style>
          <link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css">
          <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
          <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
        </head>
        <body>
          <header class="site-header" id="header">
            <h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU! ${req.body.name}</h1>
          </header>
        
          <div class="main-content">
            <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
            <p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you. We will contact you right away.</p>
          </div>

          <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
        
          <footer class="site-footer" id="footer">
            <p class="site-footer__fineprint" id="fineprint">Copyright ©2014 | All Rights Reserved</p>
          </footer>
        </body>
        </html>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send("error");
        } else {
            console.log('Email sent: ' + info.response);
            console.log(req.body);

            // SweetAlert popup for success
            res.status(200).send('Email sent successfully');
        }

        // Move the redirect outside of the sendMail callback
        res.redirect('/');
    });
});

module.exports = router;