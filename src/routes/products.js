const express = require('express')
const router = express.Router();

const productController = require('../app/controllers/ProductController')

router.get('/:slug', productController.show)
router.get('/products', productController.index)
router.post('/create', productController.create)
router.post('/search', productController.search)
module.exports = router