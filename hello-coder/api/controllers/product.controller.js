var Product = require('../../models/products.model');

module.exports.index = async function(req, res) {
    var products = await Product.find();

    // var page = parseInt(req.query.page) || 1; // n
    // var perPage = 8; // number of card in perpage: x
    // var start = (page - 1) * perPage;
    // var end = page * perPage;

    // var arr = [];
    // var numberPage = 3;
    // var pageEnd = page + numberPage - 1;
    // for(i = 1 ; i <= products.length + 1 ; i++) {
    //     arr.push(i);
    // }

    // res.render('products/view', {
    //    products: db.get('products').value().slice(start, end),
    //    displayPage: arr.slice(page - 1, pageEnd)
    // });

    // res.render('products/view', {
    //     products: products.slice(start, end),
    //     displayPage: arr.slice(page - 1, pageEnd)
    // });

    res.json(products);
};

module.exports.search = function(req, res) {
    
};

module.exports.postProduct = async function(req, res) {
    var product = await Product.insertMany(req.body);
    res.json(product);
}