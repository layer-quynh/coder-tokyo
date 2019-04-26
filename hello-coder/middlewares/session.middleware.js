var shortid = require('shortid');
var User = require('../models/users.model');

module.exports = async function(req, res, next) {
    if(!req.signedCookies.sessionId) {
        var sessionId = shortid.generate()
        res.cookie('sessionId', sessionId, {
            signed: true
        });

        await User.insertMany({
            id: sessionId
        });
    }

    next();
}