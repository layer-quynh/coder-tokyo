var Transfer = require('../models/transfers.model');

module.exports.create = function(req, res, next) {
    res.render('transfer/create');
};

module.exports.postCreate = function(req, res, next) {
    var data = {
        accountId: req.body.accountId,
        amount: parseInt(req.body.amount),
        userId: req.cookies.userId
    };

    Transfer.insertMany(data, function(error, docs) {});
    res.redirect('/transfer/create');
};