const Product = require('../models/product')
const { mongooseToObject } = require('../../util/mongoose')

class AdminController {

    async index(req, res) {
        await res.render('Admin/admin')
    }
    async adminCus(req, res) {
        await res.render('Admin/admin_cus')
    }
    async adminOrder(req, res) {
        await res.render('Admin/admin_order')
    }
    async add(req, res, next) {
        const product = new Product(req.body)
        await product.save()
            .then(() => res.redirect(`/admin`))
    }
    async edit(req, res, next) {
        await Product.findById({ _id: req.params.id })
            .then(product =>
                res.render('show/edit', { product: mongooseToObject(product) })
            )
            .catch(next)
    }
    async update(req, res, next) {
        await Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect(`/admin`))
    }
    async delete(req, res, next) {
        await Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect(`/admin`))
    }
};

module.exports = new AdminController