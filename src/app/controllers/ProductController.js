const { response } = require('express')
const Product = require('../models/product')
const User = require('../models/user')
class ProductController {

  index(req, res) {

    res.render('products')
  }
  async show(req, res, next) {
    try {
      const product = await Product.findOne({ name: req.params.slug }).lean();
      const user = await User.findOne({ curent: true }).lean();
      res.render('show/product_detail', { product, user });
    } catch (error) {
      next(error);
    }
  }
  create(req, res, next) {
    const product = new Product(req.body)

    User.findOneAndUpdate(
      { curent: true },
      { $push: { productsInCart: product } },
      { new: true }
    )
      .then(user => {
        if (user) {
          res.redirect(`/products`)
        } else {
          res.redirect(`/cart`)
        }
      })
      .catch(next);

  }
  search(req, res, next) {
    const productName = req.body.name;
    const regex = new RegExp(productName, 'i');
    Product.find({ name: regex })
      .then(products => {
        products = products.map(product => product.toObject())
        res.render('products', { products: products })
      })
  }
}

module.exports = new ProductController
