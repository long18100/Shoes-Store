const express = require('express')
const router = express.Router();

const paymentController = require('../app/controllers/PaymentController')

router.get('/payment', paymentController.index)
router.post('/:id', paymentController.pay)

module.exports = router