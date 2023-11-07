const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const User = require('../models/user');
const Product = require('../models/product');
const { NULL } = require('node-sass');
class SiteController {
    async home(req, res, next) {
        if (req.query._logout === "true") {
            User.updateMany({}, { $set: { curent: false } }).then(() => {
                res.redirect(`/`)
            })
        }
        //res.json(typeof(req.query._logout))
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
            if (req.query.type === 'desc') {
                products = products.sort((a, b) => a.price - b.price);
            } else if (req.query.type === 'asc') {
                products = products.sort((a, b) => b.price - a.price);
            }
            const user = await User.findOne({ curent: true }).lean();
            res.render('kid', { products, user });
        } catch (error) {
            next(error);
        }
    }
    async men(req, res, next) {
        try {
            let products = await Product.find({ type: "men" }).lean();
            if (req.query.type === 'desc') {
                products = products.sort((a, b) => a.price - b.price);
            } else if (req.query.type === 'asc') {
                products = products.sort((a, b) => b.price - a.price);
            }
            let user = await User.findOne({ curent: true }).lean();
            res.render('men', { products, user });
        } catch (error) {
            next(error);
        }
    }
    async women(req, res, next) {
        try {
            let products = await Product.find({ type: "women" }).lean();
            if (req.query.type === 'desc') {
                products = products.sort((a, b) => a.price - b.price);
            } else if (req.query.type === 'asc') {
                products = products.sort((a, b) => b.price - a.price);
            }
            const user = await User.findOne({ curent: true }).lean();
            res.render('women', { products, user });
        } catch (error) {
            next(error);
        }
    }
    async shop(req, res, next) {
        try {
            let products = await Product.find().lean();
            if (req.query.type === 'desc') {
                products = products.sort((a, b) => a.price - b.price);
            } else if (req.query.type === 'asc') {
                products = products.sort((a, b) => b.price - a.price);
            }
            const user = await User.findOne({ curent: true }).lean();
            res.render('products', { products, user });
        } catch (error) {
            next(error);
        }
    }
    cart(req, res, next) {
        User.findOne({ curent: true })
            .then((user) => { res.render('cart', { user: mongooseToObject(user) }) })
            .catch(next);
    }
    aboutUs(req, res, next) {
        User.findOne({ curent: true })
            .then((user) => { res.render('aboutUs', { user: mongooseToObject(user) }) })
            .catch(next);
    }
    admin(req, res, next) {
        Product.find({})
            .then((products) => { res.render('Admin/admin', { products: mutipleMongooseToObject(products) }) })
            .catch(next);
    }
    adminCus(req, res, next) {
        User.find({})
            .then((users) => { res.render('Admin/admin_cus', { users: mutipleMongooseToObject(users) }) })
            .catch(next);
    }
    adminOrder(req, res, next) {
        User.find({Order: { $ne: [] }})
            .then((users) => { res.render('admin/admin_order', { users: mutipleMongooseToObject(users) }) })
            .catch(next);
    }
    info(req, res, next) {
        User.findOne({ curent: true })
            .then((user) => { res.render('info', { user: mongooseToObject(user) }) })
            .catch(next);
    }
    login(req, res, next) {
        res.render('login/login')
    }
    register(req, res, next) {
        res.render('login/register')
    }
};
module.exports = new SiteController;