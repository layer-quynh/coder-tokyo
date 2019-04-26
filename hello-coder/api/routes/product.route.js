var express = require('express');

var controller = require('../controllers/product.controller');

var router = express.Router();

router.get('/', controller.index);

router.post('/', controller.postProduct);

router.get('/search', controller.search);

module.exports = router;