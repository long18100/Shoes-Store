const express = require('express')
const router = express.Router();

const register = require('../app/controllers/RegisterController')

router.get('/register', register.index)
router.post('/create', register.create)

module.exports = router