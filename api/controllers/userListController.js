"use strict"

const UserModel = require('../../src/userData.model');
const mongoose = require("mongoose");
const Fingerprint2 = require('fingerprintjs2');

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
                    error: "Requested user forms with hash id [" + req.params.userHash + "] not found. Try submiting new form."
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
            res.status(400).send(err)
        } else {
            if (userForms.length != 0) 
                res.json(userForms)
            else
                res.status(400).send({
                    error: "Requested user forms with hash id [" + req.body.userHash + "] not found. Try submiting new form."
            })
        }
    })
}

exports.create_a_user = function(req, res) {
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
            message: "User fingerprint client signature required.",
        });
    }
    
    var new_user = new UserData(req.body);
    new_user.save(function(err, user) {
        if (err) {
            res.status(400).send(err.errors)
        } else {
            res.json({
                message: "User created successfully.",
                data: user
            });
        }
    });
}
