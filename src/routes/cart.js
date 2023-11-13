const express = require('express')
const router = express.Router();

const cartController = require('../app/controllers/CartController')

router.get('/:slug', cartController.show)
router.get('/cart', cartController.index)
router.post('/add', cartController.add)
router.put('/:id', cartController.delete)
router.get('/quantity/:quantity', cartController.quantity)

module.exports = router