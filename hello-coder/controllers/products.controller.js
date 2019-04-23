var db = require('../db');

module.exports.index = function(req, res) {
    var page = parseInt(req.query.page) || 1; // n
    var perPage = 8; // number of card in perpage: x
    var start = (page - 1) * perPage;
    var end = page * perPage;

    var arr = [];
    var numberPage = 3;
    var pageEnd = page + numberPage - 1;
    for(i = 1 ; i <= db.get('products').value().length + 1 ; i++) {
        arr.push(i);
    }

    res.render('products/view', {
       products: db.get('products').value().slice(start, end),
       displayPage: arr.slice(page - 1, pageEnd)
    });
};

module.exports.search = function(req, res) {
    
};