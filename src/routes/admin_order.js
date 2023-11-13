const express = require('express')
const router = express.Router();

const adminController = require('../app/controllers/AdminController')

router.get('/adminOrder', adminController.adminOrder)

module.exports = router