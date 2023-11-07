const Product = require('../models/product')
const { mongooseToObject } = require('../../util/mongoose')

class AdminController {

    index(req, res) {
        res.render('Admin/admin')
    }
    adminCus(req, res) {
        res.render('Admin/admin_cus')
    }
    adminOrder(req, res) {
        res.render('Admin/admin_order')
    }
    add(req, res, next) {
        const product = new Product(req.body)
        product.save()
            .then(() => res.redirect(`/admin`))
    }
    edit(req, res, next) {
        Product.findById({ _id: req.params.id })
            .then(product =>
                res.render('show/edit', { product: mongooseToObject(product) })
            )
            .catch(next)
    }
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect(`/admin`))
    }
    delete(req, res, next) {
        Product.deleteOne({ _id: req.params.id})
        .then(() => res.redirect(`/admin`))
    }
};

module.exports = new AdminController