const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/', siteController.home)
router.get('/products', siteController.shop)
router.get('/men', siteController.men)
router.get('/women', siteController.women)
router.get('/kid', siteController.kid)
router.get('/admin', siteController.admin)
router.get('/adminCustomer', siteController.adminCus)
router.get('/adminOrder', siteController.adminOrder)
router.get('/login', siteController.login)
router.get('/register', siteController.register)
router.get('/cart', siteController.cart)
router.get('/aboutUs', siteController.aboutUs)
router.get('/info', siteController.info)
router.get('/payment', siteController.payment)

module.exports = router;