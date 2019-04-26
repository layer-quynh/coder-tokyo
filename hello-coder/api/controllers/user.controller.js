var User = require('../../models/users.model');

module.exports.index = async function(req, res) {
    var users = await User.find();
    res.json(users);
};

module.exports.search = async function(req, res) {
    var q = req.query.q;
    var users = await User.find();
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
};

// module.exports.create = function(req, res) {
//     res.render('users/create');
// };

module.exports.postCreate = async function(req, res) {
    req.body.avatar = req.file.path.split('/').slice(1).join('/')

    await User.insertMany(req.body);

    res.json(req.body);
    res.redirect('/users');
};

module.exports.getId = async function(req, res) {
    id = req.params.id;
    var user = await User.findById(id);
    res.json(user);
};