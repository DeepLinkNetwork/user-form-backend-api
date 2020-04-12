"use strict"

const UserModel = require('../../src/userData.model');
const mongoose = require("mongoose");
const Fingerprint2 = require('fingerprintjs2');
const fetch = require('node-fetch');
const { stringify } = require('querystring');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS
    }
  });

const UserData = mongoose.model("UserData",UserModel);

exports.listUserFormsByUserHash = function(req, res) {
    if(req.params.userHash == null || req.params.userHash =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user fingerprint hash ID.",
        });
    UserData.find({ userHash: req.params.userHash }, function(err, userForms) {
        if (err) {
            res.status(400).send(err)
        } else {
            if (userForms.length != 0) 
                res.json(userForms)
            else
                res.status(400).send({
                    error:  'failed',
                    message: "No user forms found with hash id [" + req.params.userHash + "] Try submiting new form."
            })
        }
    })
}

exports.listUserFormsByUserHash_post = function(req, res) {
    if(req.body == null || req.body =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required input data.",
        });
    if(req.body.userHash == null || req.body.userHash =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user fingerprint hash ID.",
        });
    UserData.find({ userHash: req.body.userHash }, function(err, userForms) {
        if (err) {
            res.status(400).send({
                error:  'failed',
                message: err,
            });
        } else {
            if (userForms.length != 0) 
                res.json(userForms)
            else
                res.status(400).send({
                    error:  'failed',
                    message: "Requested user forms with hash id [" + req.body.userHash + "] not found. Try submiting new form."
            })
        }
    })
}

exports.create_a_user = async function(req, res) {
    var mailformat = /\S+@\S+\.\S+/;
    if(req.body == null || req.body =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user input data.",
        });

    if(req.body.name == null || req.body.name =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user name.",
        });
    if(req.body.dob == null || req.body.dob =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user date of birth.",
        });
    if(req.body.email == null || req.body.email =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user email.",
        });
    if(!(mailformat.test(req.body.email)))
        return res.status(400).json({
            error:  'failed',
            message: "Enter valid email address.",
        });
    if(req.body.contact == null || req.body.contact =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user phone number.",
        });
    if(req.body.userHash == null || req.body.userHash =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required user fingerprint hash.",
        });
    if(req.body.submitDate == null || req.body.submitDate =='')
        return res.status(400).json({
            error:  'failed',
            message: "Required form submit date.",
        });
    
    //Security recaptcha check
    if(!req.body.curlRequest) {  //pass curlRequest=true for testing in curl to bypass recaptcha check
        if (!req.body.recaptchaResponse)
            return res.status(400).json({ error:  'failed', message: 'Please select and verify recaptcha.' });
        
        // Secret key
        const secretKey = process.env.SECRETKEY;
        
        // Verify URL
        const query = stringify({
            secret: secretKey,
            response: req.body.recaptchaResponse,
            remoteip: req.connection.remoteAddress
        });
        
        const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
        
        // Make a request to verifyURL
        const body = await fetch(verifyURL).then(res => res.json());
        
        // If not successful
        if (body.success !== undefined && !body.success)
            return res.status(400).json({ error:  'failed', message: 'Captcha verification failed' });
    }

    if(req.body.x64signature) {
        var x64signature = Fingerprint2.x64hash128(req.body.userHash+'user-db-app');
        if(x64signature != req.body.x64signature) {
            return res.status(400).json({
                error:  'failed',
                message: "User fingerprint mis-match.",
            });
        }
    } else {
        return res.status(400).json({
            error:  'failed',
            message: "User client signature required.",
        });
    }
    
    sendEmail(req.body.email,req.body);

    var new_user = new UserData(req.body);
    new_user.save(function(err, user) {
        if (err) {
            res.status(400).send({
                error:  'failed',
                message: err,
            });
        } else {
            res.json({
                message: "User created successfully.",
                data: user
            });
        }
    });
}

const sendEmail = function(email,data) {
    let mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: 'User Form Submitted Successfully',
        html: `Hi ${data.name},<br><br>You have successfully submiited your form.<br><br>Regards,<br>Heroku User App`
      };
      transporter.sendMail(mailOptions);
}
