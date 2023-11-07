const Product = require('../models/product')
const User = require('../models/user');
const { mongooseToObject } = require('../../util/mongoose')

class CartController {

    index(req, res) {
        res.render('cart')
    }

    show(req, res, next) {
        Product.findOne({ name: req.params.slug })
            .then(product =>
                res.render('show/product_detail', { product: mongooseToObject(product) })
            )
            .catch(next)
    }
    add(req, res) {
        const product = req.body
        //res.json(product)
        if (product.totalMoney > 0) {
            User.findOneAndUpdate(
                {
                    curent: true,
                    address: { $ne: '' }
                },
                { $push: { Order: product } },
                { new: true }
            )
                .then(success => {
                    if (success) {
                        console.log(success);
                        res.redirect(`/cart`)
                    } else {
                        res.redirect(`/info`)
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            User.findOneAndUpdate({ curent: true }, { $set: { productsInCart: [] } }, { new: true })
                .then(user => {
                    console.log("Tất cả dữ liệu trong mảng 'productsInCart' đã được xóa.");
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            res.redirect(`/cart`)
        }

    }
    delete(req, res, next) {
        // User.updateOne({ curent: true }, { $pull: { productsInCart: { _id: req.params.id } } })
        //     .then((user) => {
        //         if(user)
        //             res.redirect(`/cart`)
        //         else
        //             res.redirect(`/`)
        //     })
    }
};

module.exports = new CartController