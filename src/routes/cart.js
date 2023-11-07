const express = require('express')
const router = express.Router();

const cartController = require('../app/controllers/CartController')

router.get('/:slug', cartController.show)
router.get('/cart', cartController.index)
router.post('/add', cartController.add)
router.put('/:id', cartController.delete)
module.exports = router