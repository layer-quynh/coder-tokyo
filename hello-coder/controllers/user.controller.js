var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index', {
       users: db.get('users').value()
    });
};

module.exports.search = function(req, res) {
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
};

module.exports.create = function(req, res) {
    res.render('users/create');
};

module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('/').slice(1).join('/')

    db.get('users').push(req.body).write();
    res.redirect('/users');
};

module.exports.getId = function(req, res) {
    id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('users/view', {
        usr: user
    });
};