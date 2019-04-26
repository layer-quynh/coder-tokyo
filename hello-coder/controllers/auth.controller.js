var User = require('../models/users.model');
var md5 = require('md5');

module.exports.login = function(req, res) {
    res.render('auth/login');
};

module.exports.postLogin = async function(req, res) {
    var email = req.body.email;
    var passwd = req.body.password;

    var user = await User.findOne({'email': email});

    if(!user) {
        res.render('auth/login', {
            errors: [
                "User doesn't exist!"
            ],
            values: req.body
        })
        return;
    }

    var hashedPasswd = md5(passwd);

    if(user.password !== hashedPasswd) {
        res.render('auth/login', {
            errors: [
                'Wrong password!'
            ],
            values: req.body
        });
        return;
    }

    res.cookie('userId', user.id);
    res.redirect('/users');
};