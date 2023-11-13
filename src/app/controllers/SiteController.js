const { NULL } = require('node-sass');

const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { sortProducts } = require('../../util/app')

const User = require('../models/user');
const Product = require('../models/product');

class SiteController {

    async home(req, res, next) {
        if (req.query._logout === "true") {
            User.updateMany({}, { $set: { curent: false } }).then(() => {
                res.redirect(`/`)
            }).catch(next)
        }
        try {
            const products = await Product.find({ newCL: true }).lean();
            const user = await User.findOne({ curent: true }).lean();
            res.render('home', { products, user });
        } catch (error) {
            next(error);
        }
    }

    async kid(req, res, next) {
        try {
            let products = await Product.find({ type: "kid" }).lean();
            sortProducts(req, products)
            const user = await User.findOne({ curent: true }).lean();
            res.render('kid', { products, user });
        } catch (error) {
            next(error);
        }
    }
    async men(req, res, next) {
        try {
            let products = await Product.find({ type: "men" }).lean();
            sortProducts(req, products)
            let user = await User.findOne({ curent: true }).lean();
            res.render('men', { products, user });
        } catch (error) {
            next(error);
        }
    }
    async women(req, res, next) {
        try {
            let products = await Product.find({ type: "women" }).lean();
            sortProducts(req, products)
            const user = await User.findOne({ curent: true }).lean();
            res.render('women', { products, user });
        } catch (error) {
            next(error);
        }
    }

    async shop(req, res, next) {
        try {
            let products = await Product.find().lean();
            sortProducts(req, products)
            const user = await User.findOne({ curent: true }).lean();
            res.render('products', { products, user });
        } catch (error) {
            next(error);
        }
    }
    async cart(req, res, next) {
        await User.findOne({ curent: true })
            .then((user) => { res.render('cart', { user: mongooseToObject(user) }) })
            .catch(next);
    }
    async payment(req, res, next) {
        await User.findOne({ curent: true })
            .then((user) => { res.render('payment', { user: mongooseToObject(user) }) })
            .catch(next);
    }

    async aboutUs(req, res, next) {
        await User.findOne({ curent: true })
            .then((user) => { res.render('aboutUs', { user: mongooseToObject(user) }) })
            .catch(next);
    }
    async admin(req, res, next) {
        await Product.find({})
            .then((products) => { res.render('Admin/admin', { products: mutipleMongooseToObject(products) }) })
            .catch(next);
    }
    async adminCus(req, res, next) {
        User.find({})
            .then((users) => { res.render('Admin/admin_cus', { users: mutipleMongooseToObject(users) }) })
            .catch(next);
    }
    async adminOrder(req, res, next) {
        await User.find({ Order: { $ne: [] } })
            .then((users) => { res.render('admin/admin_order', { users: mutipleMongooseToObject(users) }) })
            .catch(next);
    }

    async info(req, res, next) {
        await User.findOne({ curent: true })
            .then((user) => { res.render('info', { user: mongooseToObject(user) }) })
            .catch(next);
    }

    async login(req, res, next) {
        await res.render('login/login')
    }
    async register(req, res, next) {
        await res.render('login/register')
    }
};
module.exports = new SiteController;