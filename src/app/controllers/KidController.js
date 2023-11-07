const Product = require('../models/product')
const { mongooseToObject } = require('../../util/mongoose')

class KidController {

    index(req, res) {
        res.render('kid')
    }

    show(req, res, next) {
        Product.findOne( {name: req.params.slug} )
            .then(product =>
                res.render('show/product_detail', {product: mongooseToObject(product)})
            )
            .catch(next)
    }
};

module.exports = new KidController