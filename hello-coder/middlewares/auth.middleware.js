var User = require('../models/users.model');

module.exports.requireAuth = async function(req, res, next) {
    if(!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    var userId = req.cookies.userId;
    var user = await User.findById(userId);
    if(!user) {
        res.redirect('/auth/login')
        return;
    }

    next();
}