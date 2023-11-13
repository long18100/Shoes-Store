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

    async add(req, res) {
        const product = req.body
        if (product.totalMoney > 0) {
            try {
                const user = await User.findOne({ curent: true, address: { $ne: '' } });
                if (user) {
                    user.Order.push(...user.productsInCart);
                    await user.save();
                    res.redirect(`/cart`);
                } else {
                    res.redirect(`/info`);
                }
            } catch (error) {
                console.error(error);
                res.redirect(`/`);
            }
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
        User.findOneAndUpdate(
            { curent: true },
            { $pull: { productsInCart: { name: req.params.id } } },
            { new: true }
        )
            .then(user => {
                if (user) {
                    res.redirect(`back`);
                }
            })
            .catch(next);
    }
    
    quantity(req, res) {
        if (req.query.type === "minus") {
            User.findOneAndUpdate(
                { curent: true, "productsInCart._id": req.params.quantity },
                { $inc: { "productsInCart.$.quantity": -1 } },
                { new: true }
            ).then((user) => {
                if (user) {
                    User.findOneAndUpdate(
                        { curent: true },
                        { $pull: { productsInCart: { quantity: 0 } } },
                        { new: true }
                    ).then((user) => {
                        if (user) {
                            res.redirect(`back`)
                        }
                    })
                }
            })
        } else if (req.query.type === "plus") {
            User.findOneAndUpdate(
                { curent: true, "productsInCart._id": req.params.quantity },
                { $inc: { "productsInCart.$.quantity": +1 } },
                { new: true }
            ).then((user) => {
                res.redirect(`back`)
            })
        }
    }
};

module.exports = new CartController